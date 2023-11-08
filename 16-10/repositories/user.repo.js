const User = require("../models/user.model");

const getUserById = async (id) => {
  return await User.findById(id);
};

const getAllByCondition = async (filter = {}) => {
  return await User.find(filter);
};
const getUserByCondition = async (filter = {}) => {
  return await User.findOne(filter);
};
const createUser = async ({ email, password, name, dob }) => {
  return await User.create({ email, password, name, dob });
};

const deleteU = async (filter) => {
  return await User.deleteOne(filter);
};

const update = async (filter, data) => {
  return await User.updateOne(filter, data);
};
const userRepo = {
  getUserById,
  createUser,
  getUserByCondition,
  deleteU,
  update,
  getAllByCondition
};
module.exports = userRepo;
