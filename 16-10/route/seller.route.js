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


sellerRouter.get(
  "/",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    req.permission = [2]; //
    next();
  },  // tạo 1 quyền cho đường dẫn này
  middlewareAuth.checkPermission, //
  sellerController.getAllSeller
);

sellerRouter.put(
  "/status",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    req.permission = [2]; //
    next();
  },  // tạo 1 quyền cho đường dẫn này
  middlewareAuth.checkPermission, //
  sellerController.updateStatus
);
