import { Request, Response, NextFunction } from 'express'
import { decodeJwtToken, TokenTypes } from '../../../utils/jwt.util'
import { AuthenticatedRequest } from '../../../../types'
import response from '../response'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization || ''
	token = token.slice(7, token.length)
	try {
		const data = await decodeJwtToken(token, TokenTypes.AUTH);
		(req as AuthenticatedRequest).user = data
		return next()
	} catch (error) {
		return response({ res, status: 401, error: 'Unauthorized' })
	}
}
