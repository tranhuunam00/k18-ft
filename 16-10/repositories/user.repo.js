/** @format */

const User = require('../models/user.model');

const getUserById = async (id) => {
   return await User.findById(id);
};

const createUser = async (newUser) => {
   return await User.create(newUser);
};
const userRepo = {
   getUserById,
   createUser,
};
module.exports = userRepo;
