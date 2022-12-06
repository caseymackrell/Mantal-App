import { Response } from 'express'
import logger from '../../utils/logger.util'

type args = {
	status?: number;
	data?: any;
	res: Response
	error?: any
}

const response = ({
	res,
	data = null,
	status = 200,
	error = null,
}: args) => {
	try {
		logger.debug(`[Response] ${res.req.method} ${res.req.originalUrl}`)
		if (error) {
			logger.error(`[Response] ${res.req.method} ${res.req.originalUrl} | ${JSON.stringify(error)}`)
		}
	} catch (error) { logger.error(error) }
	return res
		.status(status)
		.send({
			data,
			error,
		})
}

export default response
