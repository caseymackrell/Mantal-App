import { Request, Response } from 'express'
import Comment from '../db/comments.db'

export const createComment = async (req: Request, res: Response) => {
	// find logged in user?

	const newComment = {
		user: req.body.user,
		message: req.body.message,
	}

	const createdComment = await Comment.create(newComment)

	try {
		const savedComment = await createdComment.save()
		res.status(200).json(savedComment)
	} catch (error) {
		res.status(500).json(error)
	}
}
