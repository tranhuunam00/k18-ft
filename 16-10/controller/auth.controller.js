/** @format */

const authService = require('../service/authService');

const login = async (req, res) => {
   try {
      console.log('controller login');
      const data = await authService.login(req.body);
      console.log('data', data);
      if (data?.error) {
         res.status(data.code).json(data.message);
      }
      return res.status(200).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};

const signup = async (req, res) => {
   try {
      console.log('singup------------RUNNING');
      console.log(req.file);
      console.log(req.body);

      const data = await authService.signup(req.body, req.file);
      if (data?.error) {
         res.status(data.code).json(data.message);
      }
      return res.status(201).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};

const signupConfirm = async (req, res) => {
   try {
      const data = await authService.signupConfirm(req.query);
      if (data?.error) {
         res.status(data.code).json(data.message);
      }
      return res.status(201).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};

const authController = {
   login,
   signup,
   signupConfirm,
};
module.exports = authController;
