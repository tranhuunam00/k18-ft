/** @format */

const authService = require('../service/userService');

const login = async (req, res) => {
   try {
      const data = await authService.login(req.body);
      return res.status(200).json(data);
   } catch (e) {
      return res.status(500).json(e.message);
   }
};

const signup = async (req, res) => {
   try {
      const data = await authService.signup(req.body);
      return res.status(STATUS_CODE.created).json({
         error: false,
         message: HTTP_MESSAGE.success,
         data: data,
      });
   } catch (e) {
      return res.status(STATUS_CODE.errorServer).json({
         error: true,
         message: HTTP_MESSAGE.emailNotVerify,
         data: null,
      });
   }
};

const authController = {
   login,
   signup,
};
module.exports = authController;
