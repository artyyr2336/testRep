import { useEffect, useState } from "react"
import { apiGet, apiPost } from "../../api"
import "./index.scss"

const PostsPage = () => {
	const [postData, setPostData] = useState()
	const [postTitle, setPostTitle] = useState()
	const [postBody, setPostBody] = useState()
	const [userData, setUserData] = useState()

	const getUserData = () => {
		apiGet({ url: `/users` }).then(res => {
			setUserData(res)
		})
	}

	const getPostData = () => {
		apiGet({ url: `/posts` }).then(res => {
			setPostData(res)
		})
	}

	const sendPost = () => {
		apiPost({
			url: `/posts`,
			postData: {
				title: postTitle,
				body: postBody,
			},
		}).then(res => {
			setPostData([res, ...postData])
			setPostTitle("")
			setPostBody("")
			alert("Пост успешно добавлен")
		})
	}

	useEffect(() => {
		getPostData()
		getUserData()
	}, [])

	return (
		<div className="">
			<div className="row">
				<div className="col-12">
					<div className="title">Заголовок</div>
					<input
						className="input"
						type="text"
						value={postTitle}
						onChange={e => setPostTitle(e.target.value)}
					/>
				</div>
				<div className="col-12">
					<div className="title">Описание</div>
					<textarea
						name=""
						className="textarea"
						value={postBody}
						onChange={e => setPostBody(e.target.value)}
						id=""
						cols="30"
						rows="10"
					></textarea>
				</div>
			</div>
			<button className="btn-send" onClick={() => sendPost()}>
				Отправить пост
			</button>
			<div className="row">
				{postData &&
					postData.map(i => (
						<div key={i.id} className="col-3">
							<div className="card">
								<span>
									<b>Автор поста</b> :{" "}
									{userData?.map(item => (
										<>{item.id === i.userId && item.name}</>
									))}
								</span>
								<span>
									<b>Заголовок</b>: {i.title}
								</span>
								<span>
									<b>Описание</b>: {i.body}
								</span>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default PostsPage
