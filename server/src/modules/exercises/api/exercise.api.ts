import { Exercise } from '../db/exercise.db'
import { Request, Response } from 'express'

export const createExercise = async (req: Request, res: Response) => {
	const exercises = req.body

	exercises.forEach((exercise: { exerciseName: string; muscleGroup: string; level: string; equipment: string }) => {
		const newExercise = new Exercise({
			exerciseName: exercise.exerciseName,
			muscleGroup: exercise.muscleGroup,
			level: exercise.level,
			equipment: exercise.equipment,
		})

		newExercise.save((err, exercise) => {
			if (err) {
				return res.send(err)
			}
			console.log(exercise)
		})
	})
}
