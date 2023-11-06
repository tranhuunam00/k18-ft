const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const userRouter = express.Router();

module.exports = userRouter


userRouter.get("/customer", userC.signupConfirm)
