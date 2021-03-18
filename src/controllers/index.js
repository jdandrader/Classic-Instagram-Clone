const { authLogin, authRegister, renderAuthLogin, renderAuthRegister } = require("./auth.controller");
const { homeController, profileController } = require("./user.controller");

module.exports = {
	authLogin,
	renderAuthLogin,
	authRegister,
	renderAuthRegister,
	homeController,
	profileController,
};
