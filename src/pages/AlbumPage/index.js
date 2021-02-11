import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { apiGet } from "../../api"
import "./index.scss"

const AlbumPage = () => {
	const { id } = useParams()
	const [albumData, setAlbumData] = useState()

	const getAlbumData = () => {
		apiGet({ url: `/photos` }).then(res => {
			let arr = []
			res.map(i => i.albumId == id && arr.push(i))
			setAlbumData(arr)
		})
	}
	useEffect(() => {
		getAlbumData()
	}, [])

	return (
		<div className="">
			<div className="row">
				{albumData &&
					albumData?.map(i => (
						<div key={i.id} className="col-3">
							<div className="card">
								<img style={{ width: "100%" }} src={i.thumbnailUrl} alt="" />
								<span>{i.title}</span>
								<span>айди альбома:{i.albumId}</span>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default AlbumPage
