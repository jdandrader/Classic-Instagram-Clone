const express = require("express");
const {
	authLogin,
	authRegister,
	renderAuthLogin,
	renderAuthRegister,
} = require("../../controllers");

const router = express.Router();

router.get("/login", renderAuthLogin);
router.post("/login", authLogin);

router.get("/register", renderAuthRegister);
router.post("/register", authRegister);

module.exports = router;
