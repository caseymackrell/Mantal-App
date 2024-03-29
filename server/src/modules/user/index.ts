import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import {
	getAllUsers,
	getUser, sendSmsCode, updateUser, verifySmsCode,
} from './api/user.api'

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

// userRouter.use(authMiddleware)

// Authenticated requests

userRouter.post(
	'/profile',
	getUser as any
)

userRouter.patch(
	'/',
	updateUser as any
)

userRouter.get(
	'/users',
	getAllUsers as any
)
