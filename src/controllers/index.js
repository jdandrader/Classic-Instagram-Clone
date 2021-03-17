const { authLogin, authRegister } = require("./auth.controller");
const { homeController, profileController } = require("./user.controller");

module.exports = {
	authLogin,
	authRegister,
	homeController,
	profileController,
};
