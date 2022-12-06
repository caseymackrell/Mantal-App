import mongoose from 'mongoose'
import logger from '../../utils/logger.util'

function connectToDatabase() {
	return mongoose.connect(process.env.DB_URL || '')
		.then(() => {
			logger.info('Connected to DB')
		}).catch((error) => {
			logger.error('Could not connect to db', error)
			process.exit(1)
		})
}

export default connectToDatabase
