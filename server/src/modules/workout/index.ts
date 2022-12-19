import { Router } from 'express'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import { userRouter } from '../user'
import { copyWorkout, createWorkout } from './api/workout.api'

export const workoutRouter = Router()
userRouter.use(authMiddleware)

workoutRouter.post(
	'/',
	createWorkout
)

workoutRouter.post(
	'/copy/:workoutId/:userId',
	copyWorkout
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

