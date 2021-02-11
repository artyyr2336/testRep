import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { apiGet } from "../../api"
import "./index.scss"

const AlbumsPage = () => {
	const [albumData, setAlbumData] = useState()

	const getAlbumData = () => {
		apiGet({ url: `/albums` }).then(res => {
			setAlbumData(res)
		})
	}

	useEffect(() => {
		getAlbumData()
	}, [])

	return (
		<div className="">
			<div className="row">
				{albumData &&
					albumData.map(i => (
						<div className="col-3" key={i.id}>
							<Link to={`/album/${i.id}`} className="card">
								<span>
									<b>Альбом</b>: {i.title}
								</span>
								<span></span>
							</Link>
						</div>
					))}
			</div>
		</div>
	)
}

export default AlbumsPage
