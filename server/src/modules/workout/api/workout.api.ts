import { Request, Response } from 'express'
import { Workout } from '../db/workout2.db'
import UserModel from '../../user/db/user.db'

export const createWorkout = async (req: Request, res: Response) => {
	// find logged in user?
	// UserModel.findById(req.id, (err: string | undefined, user: unknown) => {
	// 	if (err) {throw new Error(err)}
	// })

	const newWorkout = new Workout(req.body)

	try {
		const savedWorkout = await newWorkout.save()
		res.status(200).json(savedWorkout)
	} catch (error) {
		res.status(500).json(error)
	}
}
