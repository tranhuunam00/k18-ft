const express = require("express");
const authController = require("../controller/auth.controller");
const multerUtil = require("../util/multer");
const middlewareAuth = require("../middleware/checkAuth");
const customerController = require("../controller/customer.controller");
const customerRouter = express.Router();

module.exports = customerRouter;

customerRouter.get(
  "/",
  middlewareAuth.checkLogin,
  (req, res, next) => {
    req.permission = [2]; //
    next();
  },
  middlewareAuth.checkPermission,
  customerController.getAll
);
