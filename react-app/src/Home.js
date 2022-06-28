import React from "react";
import champions from "./champions/data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<div>
			<Helmet>
				<meta
					property="og:image:url"
					content="https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:secure_url"
					content="https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
					data-react-helmet="true"
				/>
				<meta
					property="og:image"
					content="https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:type"
					content="image/jpeg"
					data-react-helmet="true"
				/>
				<meta
					property="og:image:alt"
					content="Kittens"
					data-react-helmet="true"
				/>
				<meta
					property="og:type"
					content="website"
					data-react-helmet="true"
				/>
				<meta
					property="og:description"
					content="I don't know these champions"
					data-react-helmet="true"
				/>
				<meta
					property="og:title"
					content="My Champions"
					data-react-helmet="true"
				/>
			</Helmet>
			<main>
				<h1>List of Tennis GrandSlam Champions with 20 titles</h1>
				<ul>
					{champions.map((item) => (
						<li key={item.slug}>
							<Link to={`/champions/${item.slug}`}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Home;
