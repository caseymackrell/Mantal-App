import { Request, Response } from "express";
import {createPostInput, updatePostInput, getPostInput, deletePostInput} from '../schema/post.schema'
import {createPost, deletePost, findAndUpdatePost, findPost } from '../service/post.service'
import { createPostSchema } from "../schema/post.schema";
import { postDocument } from "../models/post.model";

export async function createPostHandler (
    req: Request<{}, {}, Omit<postDocument, 'user'>>, 
    res: Response)
    {
        const userId = res.locals.user._id;
        
        const body = req.body

        const post = await createPost({
            user: userId,
            ...body,
        })

        return res.send(post);
}

export async function updatePostHandler (
    req: Request<updatePostInput['params']>, 
    res: Response)
    {
        {
            const userId = res.locals.user._id;
    
            const postId = req.params.postId
    
            const update = req.body
            
            const post = await findPost({postId})
    
            if(!post){
                return res.sendStatus(404)
            }
    
            if(String(post.user !== userId)){
                return res.sendStatus(403)
            }
    
            const updatedpost = await findAndUpdatePost({postId}, update, {new: true,})
    
            return res.send(updatedpost)
    }
}

export async function getPostHandler (
    req: Request<updatePostInput['params']>, 
    res: Response)
    {
        const postId = req.params.postId
        const post = await findPost({postId})
        
        if(!post){
            return res.sendStatus(404)
        }

        return res.send(post)
}


export async function deletePostHandler (
    req: Request<updatePostInput['params']>, 
    res: Response)
    {
        const userId = res.locals.user._id;

        const postId = req.params.postId

        
        const post = await findPost({postId})

        if(!post){
            return res.sendStatus(404)
        }

        if(String(post.user !== userId)){
            return res.sendStatus(403)
        }

        await deletePost({postId})

        return res.sendStatus(200)
}