import { Request, Response } from 'express'
import { Workout } from '../db/workout2.db'
import UserModel from '../../user/db/user.db'
import { getUser } from '../../user/api/user.api'

export const createWorkout = async (req: Request, res: Response) => {
	// find logged in user?

	const newWorkout = {
		workoutName: req.body.workoutName,
		workoutDiscription: req.body.workoutDiscription,
		musclesTargeted: req.body.musclesTargeted,
		workoutLevel: req.body.workoutLevel,
		workoutType: req.body.workoutType,
		user: req.body.user,
		workout: req.body.workout,
		group: req.body.group,
		exercises: req.body.exercise,
		exerciseName: req.body.exerciseName,
		sets: req.body.sets,
		setNum: req.body.setNum,
		reps: req.body.reps,
		weight: req.body.weight,
	}

	const createdWorkout = await Workout.create(newWorkout)

	try {
		const savedWorkout = await createdWorkout.save()
		res.status(200).json(savedWorkout)
	} catch (error) {
		res.status(500).json(error)
	}
}
