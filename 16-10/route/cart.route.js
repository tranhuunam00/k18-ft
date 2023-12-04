const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const cartController = require("../controller/cart.controller");
const middlewareAuth = require("../middleware/checkAuth");
const CONST_APP = require("../constants/constant");
const cartRouter = express.Router();

module.exports = cartRouter;

//  api tajo moi cart
cartRouter.post(
  "/",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.customer];
    next();
  },
  middlewareAuth.checkPerson,
  cartController.createCart
);

cartRouter.get(
  "/",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    // req.permission = [1]; //
    req.person = [CONST_APP.PERSON.customer];
    next();
  },
  middlewareAuth.checkPerson,
  cartController.getCart
);
