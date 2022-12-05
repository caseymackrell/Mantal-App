import { Express, Request, Response } from "express";
import { create } from "lodash";
import { createUserSessionHandler, deleteSessionHandler, getuserSessionHandler } from "./controller/session.controller";
import { createUserHandler } from "./controller/user.controller";
import validateResource from './middleware/validateResource'
import { createSessionSchema } from "./schema/session.schema";
import { createUserSchema } from "./schema/user.schema";
import  requireUser  from "./middleware/requireUser";
import {createPostSchema, updatePostSchema, getPostSchema, deletePostSchema} from "./schema/post.schema"
import {createPostHandler, deletePostHandler, getPostHandler, updatePostHandler} from "./controller/post.controller"


function routes(app: Express) {
    app.get('/', (req, res) => {
        return res.send("Hello World");
    })
    
    app.get('/healthcheck', (req:Request, res:Response) => {
        res.sendStatus(200)
    })

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);

    app.post('/api/sessions', 
        validateResource(createSessionSchema), 
        createUserSessionHandler
    );

    app.get('/api/sessions/', requireUser, getuserSessionHandler)
    app.delete('/api/sessions', requireUser, deleteSessionHandler)


    app.post('/api/post', [requireUser, validateResource(createPostSchema)],
    createPostHandler)

    app.put('/api/post/:postId', [requireUser, validateResource(updatePostSchema)],
    updatePostHandler)

    app.get('/api/post/:postId', validateResource(getPostSchema),
    getPostHandler)

    app.delete('/api/post/:postId', [requireUser, validateResource(deletePostSchema)],
    deletePostHandler)
}





export default routes;