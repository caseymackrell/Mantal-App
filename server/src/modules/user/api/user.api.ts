import { Request, Response } from 'express'
import { AuthenticatedRequest } from '../../../../types'
import response from '../../../services/server/response'
import { twilioVerifyClient } from '../../../services/twilio'
import { encodeJwtToken, TokenTypes } from '../../../utils/jwt.util'
import UserModel from '../db/user.db'

export const sendSmsCode = async (req: Request, res: Response) => {
	try {
		const phone = req.body.phone
		await twilioVerifyClient
			.verifications
			.create({ to: phone, channel: 'sms' })
		return response({ res, data: { phone } })
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}

export const verifySmsCode = async (req: Request, res: Response) => {
	try {
		const { phone, otp } = req.body
		const { status } = await twilioVerifyClient
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
			return response({
				res,
				data: {
					token: await encodeJwtToken({ phone }, TokenTypes.AUTH),
				},
			})
		}
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}

export const getUser = async (req: Request, res: Response) => {
	try {
		const { user } = req as AuthenticatedRequest
		const data = await UserModel
			.findOne({ phone: user.phone })
		return response({ res, data })
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}

export const updateUser = async (req: Request, res: Response) => {
	try {
		const { user, body } = req as AuthenticatedRequest
		const data = await UserModel
			.findOne({ phone: user.phone })
		if (data) {
			data.username = body.username
			await data.save()
			return response({ res, data })
		}
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}
