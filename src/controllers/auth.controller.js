const authLogin = (req, res) => {
	res.render("layouts/login", {
		title: "Login",
	});
};

const authRegister = (req, res) => {
	res.render("layouts/register", { title: "Register" });
};


module.exports = {
	authLogin,
	authRegister
}
