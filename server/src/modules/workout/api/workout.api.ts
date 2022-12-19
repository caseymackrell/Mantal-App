import { Request, Response } from 'express'
import { Workout, WorkoutDocument } from '../db/workout2.db'
import UserModel from '../../user/db/user.db'
import { AuthenticatedRequest } from '../../../../types'
import response from '../../../services/server/response'

export const createWorkout = async (req: Request, res: Response) => {
	// Find the user by their ID
	UserModel.findById(req.body._id, (err: unknown, user:
        {
             _id: string; workouts: (WorkoutDocument & Required<{ _id: string; }>)[];
        save: (arg0: (e: unknown, updatedUser: unknown) => void) => void; }) => {
		if (err) {
			res.status(500).send(err)
		} else {
			// Create a new workout
			const newWorkout = new Workout({
				user: user._id,
				workoutName: req.body.workoutName,
				workoutDiscription: req.body.workoutDiscription,
				musclesTargeted: req.body.musclesTargeted,
				workoutLevel: req.body.workoutLevel,
				workoutType: req.body.workoutType,
				workout: req.body.workout,
				group: req.body.group,
				exercises: req.body.exercise,
				exerciseName: req.body.exerciseName,
				sets: req.body.sets,
				setNum: req.body.setNum,
				reps: req.body.reps,
				weight: req.body.weight,

			})
			// Save the workout
			newWorkout.save((error, workout) => {
				if (error) {
					res.status(500).send(error)
				} else {
					// Add the workout to the user's workout array
					user.workouts.push(workout)
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

// export const getWorkout = async (req: Request, res: Response) => {
// 	try {
// 		const { workout } = req as AuthenticatedRequest
// 		const data = await Workout
// 			.findOne({ workoutName: workout.workoutName })
// 		return response({ res, data })
// 	} catch (error) {
// 		console.error(error)
// 		return response({ res, status: 500, error })
// 	}
// }

export const copyWorkout = async (req: Request, res: Response) => {
	try {
		// Find the workout by its ID
		const workout = await Workout.findById(req.params.workoutId)
		if (!workout) {
			return res.status(404).send({ error: 'Workout not found' })
		}
		// Find the user by their ID
		const user = await UserModel.findById(req.params.userId)
		if (!user) {
			return res.status(404).send({ error: 'User not found' })
		}
		// Create a new workout based on the original workout
		const newWorkout = new Workout({
			...workout,
			_id: undefined,
			user: user._id,
			workoutName: 'hello',
		})
		// Save the new workout
		await newWorkout.save()
		// Add the new workout to the user's workouts array
		user.workouts.push(newWorkout)
		// Save the user
		await user.save()
		return res.send(newWorkout)
	} catch (error) {
		console.error(error)
		return res.status(500).send({ error: 'Error copying workout' })
	}
}
