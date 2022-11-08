import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import config from 'config'
import { signJwt } from "../Utils/jwt.utils";
import { findSessions } from "../service/session.service";


export async function createUserSessionHandler(req: Request, res: Response){

    //Validate the user's password

    const user = await validatePassword(req.body)

    if(!user){
        return res.status(401.).send("Invalid email or password")
    }

    //create a session
    const session = await createSession(user._id, req.get("user-agent") || "")

    //create access token
    
    const accessToken = signJwt(
        { ...user, session: session.user?._id},
        { expiresIn: config.get('accessTokenTtl') } //lives for 15 min
    );
    //create a refresh token
    const refreshToken = signJwt(
        { ...user, session: session.user?._id},
        { expiresIn: config.get('accessTokenTtl') } //lives for 15 min
    );

    //return access & refresh tokens
        
    return res.send({accessToken, refreshToken});


}

export async function getuserSessionHandler(req: Request, res: Response){
    const user = res.locals.user._id

    const session = await findSessions({user: createUserSessionHandler, valid: true})

    return res.send(session);
}