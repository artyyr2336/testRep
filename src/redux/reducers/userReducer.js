import { UPDATE_PROFILE } from "../types"

const initialState = {
	user: {},
}

export const userReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case UPDATE_PROFILE:
			return { ...state, user: payload }
		default:
			return state
	}
}
