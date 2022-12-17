import { Router } from 'express'
import { createExercise } from './api/exercise.api'

export const exerciseRouter = Router()

exerciseRouter.post(
	'/',
	createExercise
)
