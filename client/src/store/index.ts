import user from './reducers/user.reducer'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

export const store = configureStore({
	reducer: {
		user,
	},
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware(),
		logger,
	],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
