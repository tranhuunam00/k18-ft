const express = require("express");
const sellerController = require("../controller/seller.controller");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const CONST_APP = require("../constants/constant");
const productRouter = express.Router();

module.exports = productRouter;

productRouter.post(
  "/",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.seller]
    next();
  },  // tạo 1 quyền cho đường dẫn này
  // middlewareAuth.checkPermission, //
  middlewareAuth.checkPerson, // 
  
  sellerController.createSeller
);


