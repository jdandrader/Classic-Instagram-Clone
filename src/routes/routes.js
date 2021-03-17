const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index", {
		title: "Instagram Clone",
		user: {
			authenticated: true
		}
	});
});

router.get("/login", (req, res) => {
	res.render("layouts/login", {
		title: "Login"
	});
});

router.get("/register", (req, res) => {
	res.render("layouts/register", { title: "Register" });
});

router.get("/profile", (req, res) => {
	res.render("layouts/profile", {
		title: "Nicolas Jimenez | Instagram",
	});
});

module.exports = router;
