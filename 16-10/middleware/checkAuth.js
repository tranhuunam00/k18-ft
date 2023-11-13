const CONST_APP = require("../constants/constant");
const STATUS_CODE = require("../constants/httpResponseCode");
const customerRepo = require("../repositories/customer.repo");
const SellerRepo = require("../repositories/seller.repo");
const userRepo = require("../repositories/user.repo");
const HelperApp = require("../util/helper");

const checkLogin = async (req, res, next) => {
  console.log(req.headers.authorization);
  const bearToken = req.headers?.authorization;
  if (!bearToken) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: "Vui lòng truyền token",
    });
  }
  const [bear, token] = bearToken.split(" ");
  try {
    const data = HelperApp.decodeToken(token);
    const [user, seller, customer] = await Promise.all([
      userRepo.getUserById(data?._doc?._id),
      SellerRepo.getSellerByCondition({
        userId: data?._doc?._id,
      }),
      customerRepo.getCustomerByCondition({
        userId: data?._doc?._id,
      }),
    ]);
    console.log(data?._doc?._id);
    console.log(seller);
    if (!user) {
      return res.status(STATUS_CODE.notFounded).json({
        error: true,
        message: "User không tồn tại",
      });
    }
    req.loginUser = {
      id: user._id,
      role: user.role,
    };
    req[CONST_APP.PERSON.seller] = seller;
    req[CONST_APP.PERSON.customer] = customer;
  } catch (error) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: error.message,
    });
  }
  // vao database lay user co userId = ..

  next();
};

const checkPermission = async (req, res, next) => {
  const permission = req.permission; //[]
  const person = req.person;
  const loginUser = req.loginUser; //{id:role}
  if (permission.includes(loginUser.role)) {
    return next();
  }
  return res.status(STATUS_CODE.badRequest).json({
    error: true,
    message: "Khong du quyen",
  });
};

const checkPerson = async (req, res, next) => {
  const person = req.person;  // ["seller","customer"]
  // REQ.LOGIN REQ.SELLER REQ.CUSTIMER
  let check = false
  for (let p of person) {
    if (p == CONST_APP.PERSON.seller && req[p]) {
      check = true
    }
    if (p == CONST_APP.PERSON.customer && req[p]) {
      check = true
    }
  }
  if (check) {
    return next()
  }
  // if (person.some((p) => req[p])) {
  //   return next();
  // }
  return res.status(STATUS_CODE.badRequest).json({
    error: true,
    message: "Khong du quyen",
  });
};
const middlewareAuth = {
  checkLogin,
  checkPermission,
  checkPerson,
};
module.exports = middlewareAuth;
