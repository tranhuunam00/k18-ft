const express = require("express");
const sellerController = require("../controller/seller.controller");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const sellerRouter = express.Router();

module.exports = sellerRouter;

sellerRouter.post(
  "/",
  middlewareAuth.checkLogin,
  multerUtil.upload.single("file"),
  sellerController.createSeller
);
