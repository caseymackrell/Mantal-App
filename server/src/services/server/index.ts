import express from 'express'
import logger from '../../utils/logger.util'
import router from './router'
import cors from 'cors'

const app = express()

// Pre-route middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use((req, _, next) => {
	logger.debug(`[Request] ${req.method} ${req.path}`)
	return next()
})

// Routes
router(app)

export default app
