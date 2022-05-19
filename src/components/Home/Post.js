import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Post({ post }) {
	return (
		<Col xs='12' md='6'>
			<Link
				to={"/blog/" + post.id}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				<img
					src={`https://picsum.photos/seed/${post.id}/600`}
					style={{
						height: "300px",
						objectFit: "cover",
						width: "100%",
						marginTop: "50px",
					}}
				/>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</Link>
			<div style={{ minHeight: "50px" }}>
				<Button outline>Add to wishlist!</Button>
			</div>
		</Col>
	);
}

export default Post;
