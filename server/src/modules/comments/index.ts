import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import { createComment } from './api/comments.api'

export const commentRouter = Router()

commentRouter.post(
	'/',
	createComment
)
