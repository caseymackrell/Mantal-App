import { Request, Response } from 'express'
import Comment, { CommentDocument } from '../db/comments.db'
import UserModel from '../../user/db/user.db'

export const createComment = async (req: Request, res: Response) => {
	// Find the user by their ID
	UserModel.findById(req.body._id, (err: unknown, user:
        { _id: string; comments: (CommentDocument & Required<{ _id: string; }>)[];
        save: (arg0: (e: unknown, updatedUser: unknown) => void) => void; }) => {
		if (err) {
			res.status(500).send(err)
		} else {
			// Create a new comment
			const newComment = new Comment({
				message: req.body.message,
				user: user._id,
			})
			// Save the comment
			newComment.save((error, comment) => {
				if (error) {
					res.status(500).send(error)
				} else {
					// Add the comment to the user's comments array
					user.comments.push(comment)
					// Save the user
					user.save((e: unknown, updatedUser: unknown) => {
						if (e) {
							res.status(500).send(e)
						} else {
							res.send(updatedUser)
						}
					})
				}
			})
		}
	})
}
