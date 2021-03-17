const express = require("express");
const {
	homeController,
	authLogin,
	authRegister,
	profileController,
} = require("../controllers");


const router = express.Router();

router.get("/", homeController);
router.get("/login", authLogin);
router.get("/register", authRegister);
router.get("/profile", profileController);

module.exports = router;
