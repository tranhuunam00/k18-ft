/** @format */

const userRepo = require('../repositories/user.repo');

const login = async (req, res) => {
   try {
   } catch (e) {
      return res.status(500).json(e.message);
   }
};

const signup = async (data) => {
   console.log('sign up RUNNING');
   try {
      const {name, email, password, dob} = data;
      console.log('---------------------1-----');
      // vẻify
      return await userRepo.createUser({name, email, password, dob});
   } catch (e) {
      return res.status(500).json(e.message);
   }
};

const authService = {
   login,
   signup,
};
module.exports = authService;
