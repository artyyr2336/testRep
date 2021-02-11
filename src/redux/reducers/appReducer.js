import { LOGIN, LOGOUT } from "../types"

const initialState = {
	authToken: null,
}

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case LOGIN:
			return { ...state, authToken: payload }
		case LOGOUT:
			return initialState
		default:
			return state
	}
}
