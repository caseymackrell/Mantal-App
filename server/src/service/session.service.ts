import sessionModel from "../models/session.model";

export async function createSession(userID: string, userAgent: string) {
    const session = await sessionModel.create({user: userID, userAgent });

    return session.toJSON();
}