import { combineReducers } from "redux"
import { appReducer } from "./appReducer"
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
})
