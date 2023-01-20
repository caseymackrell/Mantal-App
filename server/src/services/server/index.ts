import express from 'express'
import logger from '../../utils/logger.util'
import router from './router'
import cors from 'cors'

const app = express()

// Pre-route middleware
app.use(express.json())
const corsOptions = {
	origin: 'http://localhost:3001',
	optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use((req, _, next) => {
	logger.info(`[Request] ${req.method} ${req.path}`)
	return next()
})

// Routes
router(app)

export default app
