const express = require("express");
const sellerController = require("../controller/seller.controller");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const CONST_APP = require("../constants/constant");
const productController = require("../controller/product.controller");
const productRouter = express.Router();

module.exports = productRouter;

productRouter.post(
  "/",
  middlewareAuth.checkLogin,  // xac dinh ai dang nhap .
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.seller ,"customer"]
    next();
  },  // tạo 1 quyền cho đường dẫn này 
  // middlewareAuth.checkPermission, //
  middlewareAuth.checkPerson, // 
  multerUtil.upload.single('file'),  // luwu 1 caifile va get no ra
  productController.createProduct  //action ------
);

productRouter.post(
  "/size-color",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.seller]
    next();
  },  // tạo 1 quyền cho đường dẫn này
  // middlewareAuth.checkPermission, //
  middlewareAuth.checkPerson, // 
  multerUtil.upload.array('file'),
  productController.createSizeColor
);

productRouter.get("/color", productController.getColors)
productRouter.get("/size", productController.getSize)

productRouter.get("/size-color-all", productController.getAllSizeColorProduct)






