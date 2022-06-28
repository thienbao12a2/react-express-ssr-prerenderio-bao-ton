import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route
						exact
						path="/champions/:userId"
						element={<Profile />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
