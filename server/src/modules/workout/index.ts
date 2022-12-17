import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import { createWorkout } from './api/workout.api'

export const workoutRouter = Router()

workoutRouter.post(
	'/',
	createWorkout
)

// workoutRouter.get(
// 	'/',
// 	getWorkout
// )

// workoutRouter.get(
// 	'/all',
// 	getAllWorkouts
// )

// workoutRouter.patch(
// 	'/',
// 	editWorkout
// )

// workoutRouter.delete(
// 	'/',
// 	deleteWorkout
// )

