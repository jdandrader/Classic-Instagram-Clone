const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {
		user: {
			authenticated: true
		}
	});
});

router.get("/login", (req, res) => {
	res.render("layouts/login");
});

router.get("/register", (req, res) => {
	res.render("layouts/register");
});

router.get("/profile", (req, res) => {
	res.render("layouts/profile");
});

module.exports = router;
