/** @format */

const HTTP_MESSAGE = require('../constants/httpErrorMessage');
const STATUS_CODE = require('../constants/httpResponseCode');
const UTIL_HELPER = require('../helper/util');
const User = require('../models/user.model');
const userRepo = require('../repositories/user.repo');

const login = async (req, res) => {
   try {
   } catch (e) {
      return res.status(500).json(e.message);
   }
};

const signup = async (data) => {
   try {
      const {name, email, password, age} = data;
      //1. check type và dữ liệu
      if (!email || !password || !name || !age) {
         throw new Error(
            JSON.stringify({
               status: STATUS_CODE.badRequest,
               message: HTTP_MESSAGE.dataNotVerify,
               error: true,
            }),
         );
      }
      //2. check định dạng email
      if (!UTIL_HELPER.validateEmail(email)) {
         throw new Error(
            JSON.stringify({
               error: true,
               message: HTTP_MESSAGE.emailNotVerify,
               status: STATUS_CODE.badRequest,
            }),
         );
      }

      // 3. password dài hơn 6 kí tự
      // hoặc n điều kiện cho pw
      if (!UTIL_HELPER.validatePassword(password)) {
         throw new Error(
            JSON.stringify({
               error: true,
               message: HTTP_MESSAGE.passwordNotVerify,
               status: STATUS_CODE.badRequest,
            }),
         );
      }

      // 4. check email tồn tại
      const exitedUser = User.findOne({email: email});
      console.log(exitedUser);
      if (exitedUser) {
         throw new Error(
            JSON.stringify({
               error: true,
               message: HTTP_MESSAGE.existedUser,
               status: STATUS_CODE.badRequest,
            }),
         );
      }

      // 5. hash pw
      const hashPw = await UTIL_HELPER.hashPassword(password);
      // lưu vào db
      const newUser = {
         email,
         password: hashPw,
         name,
         age,
      };
      return await userRepo.createUser(newUser);
   } catch (e) {
      console.log(e);
   }
};

const authService = {
   login,
   signup,
};
module.exports = authService;
