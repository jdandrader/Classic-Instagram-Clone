const express = require('express')
const app = express()


app.get("/", (req, res) => {
	res.send(":)");
});


app.get("*", (req, res) => {
	res.send("404");
});

module.exports = app
