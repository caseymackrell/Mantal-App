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
			let userId: string
			const existing = await UserModel.findOne({ phone })
			if (existing) {
				existing.lastLogin = new Date()
				await existing.save()
				userId = existing._id
			} else {
				const newUser = await UserModel.create({
					phone,
					lastLogin: new Date(),
				})
				userId = newUser.id
			}
			return response({
				res,
				data: {
					token: await encodeJwtToken({ _id: userId }, TokenTypes.AUTH),
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
		const { phoneNumber } = req.body
		const user = await UserModel.findOne({ phone: phoneNumber }, { password: 0 })
		if (!user) {
			return res.status(404).json({ error: 'user not found' })
		} else {return res.status(200).json({ data: user })}
	} catch (error) {
		console.error(error)
		return res.status(500).json({ error })
	}
}

export const updateUser = async ({ user, body }: AuthenticatedRequest, res: Response) => {
	try {
		// Check if username exists, if so return friendly erro
		user.username = body.username
		await user.save()
		return response({ res, data: user })
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}

export const followUser = async (req: AuthenticatedRequest, res: Response) => {
	try {
		// Find the user to be followed
		const userToFollow = await UserModel.findById(req.params.id)

		if (!userToFollow) {
			throw new Error('User does not exist')
		}

		// Add the user to the current user's list of followers
		req.user.following.push(userToFollow._id)
		await req.user.save()

		// Add the current user to the user to be followed's list of followers
		userToFollow.followers.push(req.user._id)
		await userToFollow.save()

		return response({ res, data: 'Successfully followed user' })
	} catch (error) {
		return response({ res, error })
	}
}

