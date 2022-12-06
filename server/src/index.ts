import express from 'express'
import config from 'config'
import connect from './Utils/connect'
import logger from './Utils/logger'
import routes from './routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'

(async () => {
	await connect()

	const port = config.get('port') as number
	const host = config.get('host') as string

	const app = express()

	app.use(express.json())
	app.use(cookieParser())
	app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
	app.use(express.urlencoded({ extended: false }))
	routes(app)
	app.listen(port, host, async () => {
		logger.info(`Server listening at http://${host}:${port}`)
	})
})()
