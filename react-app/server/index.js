const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
var port = process.env.PORT || 80;
app.use(
	require("prerender-node").set("prerenderToken", "OrTP5FVFQWpGvIe6xkcF")
);
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(port, () => {
	console.log("server started on port 5000");
});
