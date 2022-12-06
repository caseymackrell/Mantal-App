import { Router } from 'express'
import { authMiddleware } from '../services/server/middleware/auth.middleware'
import {
	getUser, sendSmsCode, updateUser, verifySmsCode,
} from './user/api/user.api'

export const userRouter = Router()

// Unauthenticated requests

userRouter.post(
	'/send_code',
	sendSmsCode
)

userRouter.post(
	'/verify_code',
	verifySmsCode
)

userRouter.use(authMiddleware)

// Authenticated requests

userRouter.get(
	'/',
	getUser
)

userRouter.patch(
	'/',
	updateUser
)
