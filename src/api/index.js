import axios from "axios"
import { store } from "../redux/store"
import { errorHandler } from "../utils/errorHandler"

export const Api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	timeout: 10000,
})

const catchError = (err, url) => {
	errorHandler({
		screenName: url,
		errorText: err.message,
		viewAlert: false,
	})
}

const errorHandle = (url, data) => errorHandler({ screenName: url, errorText: data })

export const apiPost = async ({ url, postData = null, headerList = {}, errorCallback = null }) => {
	const { authToken } = store.getState().app
	const headers = { ...headerList, Authorization: `Bearer ${authToken}` }

	try {
		const res = await Api.post(url, postData, { headers })
		const { data, error } = res.data

		if (!error) {
			return res.data
		} else {
			data && errorCallback ? errorCallback(data) : errorHandle(url, data)
		}
	} catch (e) {
		catchError(e, url)
	}
}

export const apiGet = async ({ url, headerList = {} }) => {
	const { authToken } = store.getState().app
	const headers = { ...headerList, Authorization: `Bearer ${authToken}` }

	try {
		const res = await Api.get(url, { headers })
		const { data, error } = res.data

		if (!error) {
			return res.data
		} else {
			data && errorHandle(url, data)
		}
	} catch (e) {
		catchError(e, url)
	}
}

export const apiDelete = async ({ url, headerList = {} }) => {
	const { authToken } = store.getState().app
	const headers = { ...headerList, Authorization: `Bearer ${authToken}` }

	try {
		const res = await Api.delete(url, { headers })
		const { data, error } = res.data

		if (!error) {
			return res.data
		} else {
			data && errorHandle(url, data)
		}
	} catch (e) {
		catchError(e, url)
	}
}
