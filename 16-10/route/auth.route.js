const express = require("express");
const authController = require("../controller/user.controller");
const authRouter = express.Router();

module.exports = authRouter

authRouter.post("/signup",authController.signup)

authRouter.post("/login", authController.login)
