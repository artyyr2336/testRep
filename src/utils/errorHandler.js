import { apiPost } from "../api"
import { appLogout } from "../redux/actions/app"
import { store } from "../redux/store"

export const errorHandler = ({ screenName = "", errorText, viewAlert = true }) => {
	const IS_NOT_AUTH = errorText.match(/401/)

	let errText = null

	if (IS_NOT_AUTH) {
		store.dispatch(appLogout())
	} else if (errorText.match(/timeout/gi)) {
		errText = "Превышено время ответа от сервера. Перезагрузите приложение."
	} else if (errorText.match(/network/gi)) {
		errText = "Отсутствует интернет соединение."
	} else if (errorText.match(/404/g)) {
		errText = "Ошибка сервера: #404"
	}

	if (viewAlert && !IS_NOT_AUTH) {
		alert(`Ошибка ${screenName} ${errText || errorText}`)
	}

	apiPost({
		url: "/error",
		postData: {
			date: new Date().toLocaleString("ru-RU"),
			screenName,
			error: errText || errorText,
		},
	})
}
