const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controller");

router.get("/register", authController.get_register);
router.post("/register", authController.post_register);

router.get("/login", authController.get_login);
router.post("/login", authController.post_login);

// router.get("/login/:customeremail",authController.get_login_customermail)
// router.post("/login/:customeremail",authController.post_login_customermail);

module.exports = router;
