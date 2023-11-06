/** @format */

const STATUS_CODE = require('../constants/httpResponseCode');
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
      const {email, password, name, age} = req.body;

      const data = await authService.signup({email, password, name, age});
      return res.status(STATUS_CODE.created).json(data);
   } catch (e) {
      return res.status(STATUS_CODE.errorServer).json(e.message);
   }
};

const authController = {
   login,
   signup,
};
module.exports = authController;
