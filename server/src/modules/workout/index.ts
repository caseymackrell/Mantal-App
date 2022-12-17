import { Router } from 'express'
import { workersUrl } from 'twilio/lib/jwt/taskrouter/util'
import { authMiddleware } from '../../services/server/middleware/auth.middleware'
import { createWorkout } from './api/workout.api'
import { Workout } from './db/workout.db'

export const workoutRouter = Router()

workoutRouter.post(
	'/',
	createWorkout
)

// workoutRouter.get(
// 	'/',
// 	getWorkout
// )

// workoutRouter.patch(
// 	'/',
// 	editWorkout
// )

// workoutRouter.delete(
// 	'/',
// 	deleteWorkout
// )

