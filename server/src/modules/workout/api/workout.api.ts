import { Request, Response } from 'express'
import { Workout } from '../db/workout2.db'
import UserModel from '../../user/db/user.db'
import { getUser } from '../../user/api/user.api'

export const createWorkout = async (req: Request, res: Response) => {
	// find logged in user?

	const newWorkout = new Workout(req.body)

	try {
		const savedWorkout = await newWorkout.save()
		res.status(200).json(savedWorkout)
	} catch (error) {
		res.status(500).json(error)
	}
}
