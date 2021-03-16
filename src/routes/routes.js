const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/login", (req, res) => {
	res.render("login");
});

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

module.exports = app;
