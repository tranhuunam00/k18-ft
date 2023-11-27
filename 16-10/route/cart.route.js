const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const cartController = require("../controller/cart.controller");
const cartRouter = express.Router();

module.exports = cartRouter

//  api tajo moi cart
cartRouter.post("/", multerUtil.upload.single('file'), cartController.createCart)
