const User = require("../models/user.model");

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async ({ email, password, name, dob }) => {
  return await User.create({ email, password, name, dob });
};

const login = async ({ email, password }) => {
  return await User.find(
    (user) => user.email === email && user.password === password
  );
};

const userRepo = {
  getUserById,
  createUser,
  login,
};
module.exports = userRepo;
