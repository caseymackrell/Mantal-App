import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import postModel, { postDocument } from "../models/post.model";


export async function createPost(
    input: DocumentDefinition<Omit<postDocument, 'id' | 'createdAt' | 'updatedAt'>>)
    {
    return postModel.create(input);
}

export async function findPost(
    query: FilterQuery<postDocument>, options: QueryOptions = {lean: true})
    {
    return postModel.findOne(query, {}, options);
}

export async function findAndUpdatePost(
    query: FilterQuery<postDocument>, 
    update: UpdateQuery<postDocument>, 
    options: QueryOptions
){
    return postModel.findOneAndUpdate(query, update, options)
}

export async function deletePost(query: FilterQuery<postDocument>){
    return postModel.deleteOne(query);
}