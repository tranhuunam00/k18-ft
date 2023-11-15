const STATUS_CODE = require("../constants/httpResponseCode");
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
    const user = await userRepo.getUserById(data?._doc?._id);
    console.log("user",user);

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
  const permission = req.permission;
  const loginUser = req.loginUser;
  if (permission.includes(loginUser.role)) {
    return next();
  }
  return res.status(STATUS_CODE.badRequest).json({
    error: true,
    message: "Khong du quyen",
  });
};
const middlewareAuth = {
  checkLogin,
  checkPermission,
};
module.exports = middlewareAuth;
