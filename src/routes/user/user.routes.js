const express = require("express");
const { homeController, profileController } = require("../../controllers");

const router = express.Router();

router.get("/", homeController);
router.get("/profile", profileController);

module.exports = router;
