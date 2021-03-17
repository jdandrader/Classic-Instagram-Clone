const express = require("express");
const {
	authLogin,
	authRegister,
} = require("../../controllers");
const router = express.Router();

router.get("/login", authLogin);
router.get("/register", authRegister);

module.exports = router;
