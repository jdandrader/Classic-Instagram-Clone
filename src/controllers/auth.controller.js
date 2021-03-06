/*
		|￣￣￣￣￣
		| // TODO: Fix error message, validations
		|＿＿＿_
(\__/)||
(•ㅅ•)||
/ 　 づ
*/

const passport = require("passport");
const User = require("../models/User");

const renderAuthRegister = (req, res) => {
	res.render("layouts/register", {
		title: "Register",
	});
};

const renderAuthLogin = (req, res) => {
	res.render("layouts/login", {
		title: "Login",
	});
};

const authLogin = passport.authenticate("local", {
	failureRedirect: "layouts/login",
	successRedirect: "/",
});

const authLogOut = (req, res) => {
	req.logout();
	res.redirect("/");
};

const authRegister = async (req, res) => {
	try {
		const { realName, userName, email, password } = req.body;
		const user = new User({ realName, email, userName, password });
		user.password = await user.encryptPassword(password);
		await user.save();

		res.redirect("/");
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	authLogin,
	authLogOut,
	authRegister,
	renderAuthRegister,
	renderAuthLogin,
};
