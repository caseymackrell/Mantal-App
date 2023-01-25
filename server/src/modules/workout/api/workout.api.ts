import { Response } from 'express'
import { Workout } from '../db/workout2.db'
import UserModel from '../../user/db/user.db'
import { AuthenticatedRequest } from '../../../../types'
import response from '../../../services/server/response'
import * as _ from 'lodash'

export const createWorkout = async (req: AuthenticatedRequest, res: Response) => {
	// Create a new workout
	const newWorkout = new Workout({
		user: req.user._id,
		workoutName: req.body.workoutName,
		workoutDiscription: req.body.workoutDiscription,
		musclesTargeted: req.body.musclesTargeted,
		workoutLevel: req.body.workoutLevel,
		workoutType: req.body.workoutType,
		workout: req.body.workout,
	})
	// Save the workout
	await newWorkout.save()
	// Add the workout to the user's workout array
	req.user.workouts.push(newWorkout)
	// Save the user
	req.user.save((e: unknown, updatedUser: unknown) => {
		if (e) {
			res.status(500).send(e)
		} else {
			res.send(newWorkout)
		}
	})
}

export const getWorkout = async (req: AuthenticatedRequest, res: Response) => {
	try {
		const { id } = req.params
		const data = await Workout.findOne({ _id: id })
		return response({ res, data })
	} catch (error) {
		console.error(error)
		return response({ res, status: 500, error })
	}
}

export const copyWorkout = async (req: AuthenticatedRequest, res: Response) => {
	try {
		// Find the workout by its ID
		const workout = await Workout.findById(req.params.workoutId)
		if (!workout) {
			return res.status(404).send({ error: 'Workout not found' })
		}
		console.log(workout)
		// Create a new workout based on the original workout
		const data = new Workout({
			// workoutName: workout.workoutName,
			workoutDiscription: workout.workoutDiscription,
			musclesTargeted: workout.musclesTargeted,
			workoutLevel: workout.workoutLevel,
			workoutType: workout.workoutType,
			workout: workout.workout,
			user: req.user,
			workoutName: 'hello',
		})
		// Save the new workout
		await data.save()
		// Add the new workout to the user's workouts array
		req.user.workouts.push(data)
		// Save the user
		await req.user.save()
		return response({ res, data })
	} catch (error) {
		console.error(error)
		return res.status(500).send({ error: 'Error copying workout' })
	}
}

export const getWorkoutFeed = async (req: AuthenticatedRequest, res: Response) => {
	try {
		const pageNumber = parseInt(req.query.pageNumber as string) || 0
		const limit = parseInt(req.query.limit as string) || 20
		const result = {} as any
		const totalWorkouts = await Workout.countDocuments()
		const startIndex = pageNumber * limit
		const endIndex = (pageNumber + 1) * limit
		result.totalWorkouts = totalWorkouts
		if (startIndex > 0) {
			result.previous = {
				pageNumber: pageNumber - 1,
				limit: limit,
			}
		}
		if (endIndex < totalWorkouts) {
			result.next = {
				pageNumber: pageNumber + 1,
				limit: limit,
			}
		}
		result.data = await Workout.find()
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(startIndex)
			.populate('user', 'username')
			.exec()
		result.rowsPerPage = limit
		return res.json({ msg: 'Workouts Fetched successfully', data: result })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ msg: 'Sorry, something went wrong' })
	}
}

export const sendWorkout = async (req: AuthenticatedRequest, res: Response) => {
	try {
		// Check if the recipient's user id and scheduled date are present in the request body
		if (!req.body.recipientId || !req.body.scheduledDate) {
			return res.status(400).json({ error: 'Recipient user id or scheduled date is missing' })
		}
		// Create a new workout
		const newWorkout = new Workout({
			user: req.body.user,
			recipient: req.body.recipient,
			scheduledDate: req.body.scheduledDate,
			workoutName: req.body.workoutName,
			workoutDiscription: req.body.workoutDiscription,
			musclesTargeted: req.body.musclesTargeted,
			workoutLevel: req.body.workoutLevel,
			workoutType: req.body.workoutType,
			workout: req.body.workout,
		})
		// Save the workout
		await newWorkout.save()
		// Find the recipient user
		const recipient = await UserModel.findById(req.body.recipientId)
		if (recipient) {
			recipient.scheduledWorkouts.push({ workoutId: newWorkout._id, scheduledDate: req.body.scheduledDate })
			await recipient.save()
			res.json(newWorkout)
		} else {
			res.status(404).json({ error: 'Recipient user not found' })
		}
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Failed to send workout' })
	}
}
