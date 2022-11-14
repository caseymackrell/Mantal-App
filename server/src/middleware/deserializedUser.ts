import {get} from 'lodash'
import { Request, Response, NextFunction } from "express"
import {verifyJwt} from '../Utils/jwt.utils'
import { reIsssueAccessToken } from '../service/session.service'

const deserializedUser = async (req: Request, res: Response, next: NextFunction) => {

    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    const refreshToken = get(req, "headers.x-refresh")
    if(!accessToken){
        return next()
    }

    const {decoded, expired} = verifyJwt(accessToken, "accessTokenPublicKey")

    if(decoded){
        res.locals.user = decoded
        return next()
    }

    if (expired && refreshToken){
        const newAccessToken = await reIsssueAccessToken({ refreshToken })

        if(newAccessToken){
            res.setHeader('x-access-token', newAccessToken)
        }

        const result = verifyJwt(newAccessToken as string, "accessTokenPublicKey")
        
        res.locals.user = result.decoded
        return next()
    }

    return next();
}

export default deserializedUser;