import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"

const Menu = () => {
	return (
		<div className="menu">
			<ul>
				<li>
					<Link to="/">Пользователи</Link>
				</li>
				<li>
					<Link to="/posts">Посты</Link>
				</li>
				<li>
					<Link to="/albums">Альбомы</Link>
				</li>
			</ul>
		</div>
	)
}

export default Menu
