import { FilterQuery, UpdateQuery } from "mongoose";
import sessionModel, {SessionDocument} from "../models/session.model";
import { encodeJwtToken, decodeJwtToken, TokenTypes } from "../Utils/jwt.utils";
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

export async function reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
    const decoded = await decodeJwtToken(refreshToken, TokenTypes.REFRESH)

    if(!decoded || !get(decoded, 'session')) return false

    const session = await sessionModel.findById(get(decoded, "session"))

    if(!session ||session.valid) return false;
    const user = await findUser({__id: session.user})

    if(!user) return false

    const accessToken = encodeJwtToken(
        { ...user, session: session.user?._id},
        TokenTypes.AUTH,
    )

    return accessToken;
}