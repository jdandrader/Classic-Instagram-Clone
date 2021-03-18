/*
		|￣￣￣￣￣
		| // TODO: Fix error message, validations
		|＿＿＿_
(\__/)||
(•ㅅ•)||
/ 　 づ
*/

const User = require("../models/User");

const renderAuthRegister = (req, res) => {
	res.render("layouts/register", { title: "Register" });
};

const renderAuthLogin = (req, res) => {
	res.render("layouts/login", {
		title: "Login",
	});
};
const authLogin = (req, res) => {};

const authRegister = async (req, res) => {
	const { name, userName, email, password, passwordConfirm } = req.body;
	const errors = [];

	let data = {
		errors,
		confirm: true,
		title: "Register",
		name,
		userName,
		email,
	};

	if (password < 8) {
		errors.push({ text: "Incorrect length" });
		res.render("layouts/register", data);
	}

	if (password != passwordConfirm) {
		errors.push({ text: "Password dont match" });
		res.render("layouts/register", data);
	}

	if (errors.length > 0) {
		res.render("layouts/register", data);
	} else {
		const userEmail = await User.findOne({ email });

		if (userEmail) {
			errors.push({ text: "Email aready in use" });
			res.render("layouts/register", data);
		} else {
		try {
				const user = new User({ name, email, userName, password });
				await user.save();
				res.redirect("index", user);
		} catch (error) {
			console.error(error)
		}
		}
	}
};

module.exports = {
	authLogin,
	authRegister,
	renderAuthRegister,
	renderAuthLogin,
};
