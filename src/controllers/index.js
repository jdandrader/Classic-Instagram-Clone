const {
	authLogin,
	authLogOut,
	authRegister,
	renderAuthLogin,
	renderAuthRegister,
} = require("./auth.controller");
const { homeController, profileController } = require("./user.controller");

module.exports = {
	authLogin,
	authRegister,
	authLogOut,
	renderAuthLogin,
	renderAuthRegister,
	homeController,
	profileController,
};
