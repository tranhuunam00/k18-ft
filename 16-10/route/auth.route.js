const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const authRouter = express.Router();

module.exports = authRouter;

authRouter.post("/signup", multerUtil.upload.single('file'), authController.signup)

authRouter.post("/login", authController.login)

authRouter.get("/signup-confirm", authController.signupConfirm)
