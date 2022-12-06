import {
	Express, Request, Response, NextFunction,
} from 'express'
import config from 'config'
import twilio from 'twilio'
import UserModel from './models/user.model'
import { encodeJwtToken, decodeJwtToken, TokenTypes } from './Utils/jwt.utils'
import { AuthenticatedRequest } from '../types'

const client = twilio(config.get('accountSID'), config.get('authToken'))

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization || ''
	token = token.slice(7, token.length)
	try {
		const data = await decodeJwtToken(token, TokenTypes.AUTH);
		(req as AuthenticatedRequest).user = data
		return next()
	} catch (error) {
		return res.status(401).send({ error: 'Unauthorized' })
	}
}

function routes(app: Express) {
	// Unauthenticated routes

	app.get('/', (req, res) => res.sendStatus(200))

	app.post('/login', async (req: Request, res: Response) => {
		try {
			const phone = req.body.phone
			await client.verify.v2.services(config.get('twilioVerifySid'))
				.verifications
				.create({ to: phone, channel: 'sms' })
			return res.status(200).send({ phone })
		} catch (error) {
			console.error(error)
			return res.status(500).send({ error })
		}
	})

	app.post('/login/verify', async (req: Request, res: Response) => {
		try {
			const { phone, otp } = req.body
			const { status } = await client.verify.v2.services(config.get('twilioVerifySid'))
				.verificationChecks
				.create({ to: phone, code: otp })
			if (status !== 'approved') {
				return res.status(400).send({ error: 'Invalid OTP' })
			} else {
				const existing = await UserModel.findOne({ phone })
				if (existing) {
					existing.lastLogin = new Date()
					await existing.save()
				} else {
					await UserModel.create({
						phone,
						lastLogin: new Date(),
					})
				}
				return res.status(200).send({
					token: await encodeJwtToken({ phone }, TokenTypes.AUTH),
				})
			}
		} catch (error) {
			console.error(error)
			return res.status(500).send({ error })
		}
	})

	// Authenticated routes
	app.use(authMiddleware)

	app.put('/user', async (req: Request, res: Response) => {
		try {
			const { user, body } = req as AuthenticatedRequest
			const existing = await UserModel
				.findOne({ phone: user.phone })
			if (existing) {
				existing.username = body.username
				await existing.save()
				return res.status(200).send(existing)
			}
		} catch (error) {
			console.error(error)
			return res.status(500).send({ error })
		}
	})

	app.get('/user', async (req: Request, res: Response) => {
		try {
			const { user } = req as AuthenticatedRequest
			const existing = await UserModel
				.findOne({ phone: user.phone })
			return res.status(200).send(existing)
		} catch (error) {
			console.error(error)
			return res.status(500).send({ error })
		}
	})
}

export default routes
