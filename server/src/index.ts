require('dotenv').config()
import logger from './utils/logger.util'
import connectToDatabase from './services/db'
import server from './services/server'

(async () => {
	try {
		// Setup database
		await connectToDatabase()
		// Start server
		server.listen(process.env.PORT || 3000, () => {
			if (process.env.NODE_ENV === 'development') {
				logger.info(`[Listening] Local: http://${require('os').hostname()}:${process.env.PORT || 3000}`)
			}
		})
	} catch (error) {
		logger.error(error)
	}
})()
