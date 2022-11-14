import { FilterQuery, UpdateQuery } from "mongoose";
import sessionModel, {SessionDocument} from "../models/session.model";
import { verifyJwt, signJwt } from "../Utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";
import config from 'config'


export async function createSession(userId: string, userAgent: string) {
    const session = await sessionModel.create({user: userId, userAgent });

    return session.toJSON();
}

export async function findSessions(query: FilterQuery<SessionDocument>){
    return sessionModel.find(query).lean();
}



export async function updateSession(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>){

    return sessionModel.updateOne(query, update)
}


export async function reIsssueAccessToken({refreshToken}:{ refreshToken: string}){
    const {decoded} = verifyJwt(refreshToken, "refreshTokenPublicKey")

    if(!decoded || !get(decoded, 'session')) return false

    const session = await sessionModel.findById(get(decoded, "session"))

    if(!session ||session.valid) return false;
    const user = await findUser({__id: session.user})

    if(!user) return false

    const accessToken = signJwt(
        { ...user, session: session.user?._id},
        { expiresIn: config.get('accessTokenTtl') } //lives for 15 min
    );

    return accessToken;
}