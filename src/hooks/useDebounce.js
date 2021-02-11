/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const useDebounce = (inputValue, delay) => {
	const [outputValue, setOutputValue] = useState(inputValue)

	useEffect(() => {
		const handler = setTimeout(() => {
			setOutputValue(inputValue)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [inputValue])

	return outputValue
}

export default useDebounce
