import { LOGIN, LOGOUT } from "../types"

export const appLogin = authToken => {
	return dispatch => {
		localStorage.setItem("authToken", authToken)

		dispatch({
			type: LOGIN,
			payload: authToken,
		})
	}
}

export const appLogout = () => {
	return dispatch => {
		localStorage.clear()

		dispatch({
			type: LOGOUT,
			payload: null,
		})
	}
}
