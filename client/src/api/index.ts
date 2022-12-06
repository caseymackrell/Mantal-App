import { EnhancedStore } from '@reduxjs/toolkit'
import Axios from 'axios'
import { RootState } from '../store'
import adminApi from './modules/admin.api'

let store: EnhancedStore

export const injectStore = (_store: EnhancedStore) => {
	store = _store
}

const apiClient = Axios.create({
	baseURL: process.env.API_URL,
})

apiClient.interceptors.request.use(
	(config) => {
		const { user } = store.getState() as RootState
		if (user.credential) {
			config.headers.Authorization = `Bearer ${user.credential}`
		}
		return config
	},
	(error) => Promise.reject(error)
)

const api = {
	admin: adminApi(apiClient),
}

export default api
