import React from "react"
import { useSelector } from "react-redux"
import { Route } from "react-router-dom"
import Menu from "./Menu"
import AlbumPage from "./pages/AlbumPage"
import AlbumsPage from "./pages/AlbumsPage"
import PostsPage from "./pages/PostsPage/index"
import UserPage from "./pages/UserPage"

const App = () => {
	const state = useSelector(state => state)

	return (
		<div style={{ height: "100%" }} className=" d-flex">
			<Menu />
			<Route path="/" component={UserPage} exact />
			<Route path="/posts" component={PostsPage} exact />
			<Route path="/albums" component={AlbumsPage} exact />
			<Route path="/album/:id" component={AlbumPage} exact />
		</div>
	)
}

export default App
