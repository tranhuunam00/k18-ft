const STATUS_CODE = require("../constants/httpResponseCode");
const UTIL_HELPER = require("../helper/util");

const checkAuthMiddleware = (req, res, next) => {
  console.log(req.headers.authorization);
  const bearToken = req.headers.authorization;
  const [bear, token] = bearToken.split(" ");
  try {
    const data = UTIL_HELPER.verifyToken(token);
    req.userId = data.userId;
  } catch (error) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: error.message,
      data: 50000,
    });
  }
  // vao database lay user co userId = ..

  next();
};
module.exports = checkAuthMiddleware;
