import { Application } from 'express'
import { userRouter } from '../../modules/user'
import response from './response'
import { workoutRouter } from '../../modules/workout'
import { exerciseRouter } from '../../modules/exercises/index'

const router = (app: Application) => {
	// Local modules
	app.use('/user', userRouter)
	app.use('/workout', workoutRouter)
	app.use('/exercise', exerciseRouter)
	// Root & global route
	app.get('/', (_, res) => response({ res }))
	app.get('*', (_, res) => response({ res, status: 404, error: 'Not found' }))
}

export default router
