import { Exercise } from '../db/exercise.db'
import { Request, Response } from 'express'

export const createExercise = async (req: Request, res: Response) => {
	const newExercise = new Exercise(req.body)

	try {
		const savedExercise = await newExercise.save()
		res.status(200).json(savedExercise)
	} catch (error) {
		res.status(500).json(error)
	}
}
