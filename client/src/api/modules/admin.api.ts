import { TokenPayload } from 'google-auth-library'
import { _promiseWrapper } from './../api.helpers'
import { AxiosInstance } from 'axios'
import { ApiRoot } from '../api.types'

const adminApi = (apiClient: AxiosInstance) => {
	const me = async (): Promise<ApiRoot<TokenPayload>> =>
		_promiseWrapper(apiClient.get('/admin/me'))

	return {
		me,
	}
}

export default adminApi
