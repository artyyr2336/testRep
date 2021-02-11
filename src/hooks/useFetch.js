import { useEffect, useState } from "react"
import { apiGet } from "../api"

export const useFetch = ({ url = null, headerList = {} }) => {
	const [loading, setLoading] = useState(false)
	const [response, setResponse] = useState(null)

	const getData = async () => {
		if (!loading) {
			setLoading(true)

			const res = await apiGet({ url, headerList })
			setResponse(res?.data || res)

			setLoading(false)
		}
	}

	useEffect(() => {
		url && getData()
	}, [url])

	return { response, setResponse, loading }
}
