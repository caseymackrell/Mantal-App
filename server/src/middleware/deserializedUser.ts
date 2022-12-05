import {get} from 'lodash'
import { Request, Response, NextFunction } from "express"
import { decodeJwtToken, TokenTypes } from '../Utils/jwt.utils'
import { reIssueAccessToken } from '../service/session.service'

const deserializedUser = async (req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    const refreshToken = get(req, "headers.x-refresh") as string
    if(!accessToken){
        return next()
    }

    const decoded = await decodeJwtToken(accessToken, TokenTypes.AUTH)

    if(decoded){
        res.locals.user = decoded
        return next()
    }

    // if (expired && refreshToken){
    //     const newAccessToken = await reIssueAccessToken({ refreshToken })

    //     if(newAccessToken){
    //         res.setHeader('x-access-token', newAccessToken)
    //     }

    //     const result = verifyJwt(newAccessToken as string, "accessTokenPublicKey")
        
    //     res.locals.user = result.decoded
    //     return next()
    // }

    return next();
}

export default deserializedUser;