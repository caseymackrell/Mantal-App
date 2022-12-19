import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import { userRouter } from '../user'
import { createComment } from './api/comments.api'

export const commentRouter = Router()
userRouter.use(authMiddleware)

commentRouter.post(
	'/',
	createComment
)
