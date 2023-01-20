import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import {
	copyWorkout, createWorkout, getWorkout, getWorkoutFeed,
} from './api/workout.api'

export const workoutRouter = Router()
// workoutRouter.use(authMiddleware)

workoutRouter.post(
	'/',
	createWorkout as any
)

workoutRouter.post(
	'/:id/copy',
	copyWorkout as any
)

workoutRouter.get(
	'/:id',
	getWorkout as any
)

workoutRouter.get(
	'/',
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

