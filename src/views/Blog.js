import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react";

function Blog() {
	const params = useParams();
	const [post, setPost] = useState(null);

	const getBlog = async (blogId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts/" + blogId
		);
		const apiPost = await responseData.json();
		console.log(apiPost);
		setPost(apiPost);
	};

	useEffect(() => {
		if (params && params.blogId) {
			getBlog(params.blogId);
		}
	}, [params]);

	return (
		<>
			<Container>
				<Row>
					<img />
				</Row>
				{post ? (
					<Row>
						<h1>{post.title}</h1>
					</Row>
				) : (
					<div>Loading...</div>
				)}
			</Container>
		</>
	);
}

export default Blog;
