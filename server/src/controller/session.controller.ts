import { Request, Response } from "express";
import { createSession, findSessions, updateSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import config from 'config'
import { signJwt } from "../Utils/jwt.utils";

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
        { ...user, session: session._id},
        "accessTokenPrivateKey",
        { expiresIn: config.get('accessTokenTtl') } //lives for 15 min
    );
    //create a refresh token
    const refreshToken = signJwt(
        { ...user, session: session.user?._id},
        "refreshTokenPrivateKey",
        { expiresIn: config.get('refreshTokenTtl') } //lives for 15 min
    );

    //return access & refresh tokens
        
    return res.send({accessToken, refreshToken});


}

export async function getuserSessionHandler(req: Request, res: Response){
    const userId = res.locals.user._id

    const session = await findSessions({user: userId, valid: true})

    return res.send(session);
}


export async function deleteSessionHandler(req: Request, res: Response){
    const sessionId = res.locals.user.session;

    await updateSession({_id: sessionId}, {valid: false})

    return res.send({
        accessToken: null,
        refreshToken: null,
    });
}