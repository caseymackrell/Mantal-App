import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import {
	copyWorkout, createWorkout, getWorkout, getWorkoutFeed,
} from './api/workout.api'

export const workoutRouter = Router()
workoutRouter.use(authMiddleware)

workoutRouter.post(
	'/',
	createWorkout as any
)

workoutRouter.post(
	'/:workoutId/copy',
	copyWorkout as any
)

workoutRouter.get(
	'/:workoutId',
	getWorkout as any
)

workoutRouter.get(
	'/feed',
	getWorkoutFeed as any
)

// workoutRouter.patch(
// 	'/',
// 	editWorkout
// )

// workoutRouter.delete(
// 	'/',
// 	deleteWorkout
// )

