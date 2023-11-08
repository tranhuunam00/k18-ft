const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const customerController = require("../controller/customer.controller");
const customerRouter = express.Router();

module.exports = customerRouter;

customerRouter.get(
  "/",
  middlewareAuth.checkLogin, // kiểm tra ai đăng nhập
  (req, res, next) => {
    req.permission = [2]; //
    next();
  },  // tạo 1 quyền cho đường dẫn này
  middlewareAuth.checkPermission, // 
  customerController.getAll
);
