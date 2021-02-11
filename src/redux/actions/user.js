import { UPDATE_PROFILE } from "../types"

export const updateProfile = userData => {
	return dispatch => {
		localStorage.setItem("userData", JSON.stringify(userData))

		dispatch({
			type: UPDATE_PROFILE,
			payload: userData,
		})
	}
}
