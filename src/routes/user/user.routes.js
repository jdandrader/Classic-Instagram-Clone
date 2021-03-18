const express = require("express");
const { homeController, profileController } = require("../../controllers");
const sessionUser = require("../../middlewares/sesssionUser");

const router = express.Router();

router.get("/", sessionUser,  homeController);
router.get("/profile", profileController);

module.exports = router;
