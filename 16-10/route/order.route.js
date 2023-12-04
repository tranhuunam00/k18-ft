const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const CONST_APP = require("../constants/constant");
const OrderController = require("../controller/order.controller");
const orderRouter = express.Router();

module.exports = orderRouter;

//  api tajo moi cart
orderRouter.post(
  "/",
  middlewareAuth.checkLogin, ///
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.customer];
    next();
  },
  middlewareAuth.checkPerson,
  OrderController.createOrder
);
