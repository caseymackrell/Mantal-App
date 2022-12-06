import { TokenPayload } from 'google-auth-library'
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		credential: '',
		data: {
			email: '',
			family_name: '',
			given_name: '',
			hd: '',
			name: '',
			picture: '',
		},
	} as { credential: string, data: TokenPayload },
	reducers: {
		setUser: (state, { payload }) => ({
			...state,
			data: payload,
		}),
		authUser: (state, { payload }) => ({
			...state,
			credential: payload,
		}),
	},
})

export const { setUser, authUser } = userSlice.actions
export default userSlice.reducer
