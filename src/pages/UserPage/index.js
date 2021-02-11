import React, { useEffect, useState } from "react"
import { apiGet } from "../../api"
import "./index.scss"
const UserPage = () => {
	const [userData, setUserData] = useState()

	const getUserData = () => {
		apiGet({ url: `/users` }).then(res => {
			setUserData(res)
		})
	}

	useEffect(() => {
		getUserData()
	}, [])

	return (
		<div className="row">
			{userData &&
				userData.map(i => (
					<div key={i.id} className="col-sm-12 col-md-6 col-lg-3">
						<div className="card">
							<span>Имя: {i.name}</span>
							<span>Почта: {i.email}</span>
							<span>Телфон: {i.phone}</span>
							<span>Сайт: {i.website}</span>
							<span>Город: {i.address.city}</span>
							<span>Улица: {i.address.street}</span>
							<span>Компания: {i.company.name}</span>
						</div>
					</div>
				))}
		</div>
	)
}

export default UserPage
