import React from "react";
import champions from "./champions/data";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
	const { userId } = useParams();
	const championData = champions.find((item) => item.slug === userId);
	const timeStamp = new Date().toUTCString();
	if (!championData) {
		return <h1>Champion does not exist.</h1>;
	}
	return (
		<div style={{ padding: "3rem" }}>
			<Helmet>
				<meta
					property="og:image:url"
					content={`${championData.image}`}
					data-react-helmet="true"
				/>
				<meta
					property="og:image:secure_url"
					content={`${championData.image}`}
					data-react-helmet="true"
				/>
				<meta
					property="og:image"
					content={`${championData.image}`}
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
					content={`${championData.description}`}
					data-react-helmet="true"
				/>
				<meta
					property="og:title"
					content={`${championData.title}`}
					data-react-helmet="true"
				/>
			</Helmet>
			<h1>{championData.title}</h1>
			<p>{championData.description}</p>
			<h5>Last updated at: {timeStamp}</h5>
		</div>
	);
};

export default Profile;
