/*
		|￣￣￣￣￣
		| // TODO: Fix error message, validations
		|＿＿＿_
(\__/)||
(•ㅅ•)||
/ 　 づ
*/

const jwt = require("jsonwebtoken");
const { createToken } = require("../helpers/auth");
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

const authLogin = async (req, res) => {
	try {
		const {  userName,  password } = req.body;
		const user = await User.findOne({userName})

		if(!user){
			return res.redirect("/auth/register");
		}


		const validatePassword = await user.comparePasswords(password)
		console.log(validatePassword);

		if (!validatePassword) {
			return res.redirect("/auth/login");
		}

		let payload = {
			id: user._id,
			name: user.realName,
			userName: user.userName
		};

		let token = await createToken(payload)

		console.log(token);
		localStorage.setItem('tokenInstagram', token)
		res.redirect("/");

	} catch (error) {
		console.log(error);
	}
};

const authRegister = async (req, res) => {
	try {
		const { realName, userName, email, password } = req.body;
		const user = new User({ realName, email, userName, password });
		user.password = await user.encryptPassword(password);
		await user.save();

		const token = await createToken(user.id);
		res.redirect("/");
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	authLogin,
	authRegister,
	renderAuthRegister,
	renderAuthLogin,
};
