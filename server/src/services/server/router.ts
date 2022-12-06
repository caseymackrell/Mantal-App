import { Application } from 'express'
import { userRouter } from '../../modules'
import response from './response'

const router = (app: Application) => {
	// Local modules
	app.use('/user', userRouter)
	// Root & global route
	app.get('/', (_, res) => response({ res }))
	app.get('*', (_, res) => response({ res, status: 404, error: 'Not found' }))
}

export default router
