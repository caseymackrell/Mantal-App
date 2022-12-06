import { AxiosPromise } from 'axios'
import { removeSession } from '../services/auth'

export const _promiseWrapper = async (request: AxiosPromise) =>
	request
		.then(({ data }) => data)
		.catch(async (error) => {
			if (error?.response?.data) {
				console.error(error.response.data.error)
				if (error?.response.status === 401) {
					await removeSession()
					window.location.reload()
				}
				return error.response.data
			}
			return error
		})
