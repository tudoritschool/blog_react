import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Wishlist from "./views/Wishlist";
import NavBar from "./common/NavBar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<div style={{ marginTop: "90px" }}>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/blog/:blogId' element={<Blog />}></Route>
						<Route path='/wishlist' element={<Wishlist />}></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
