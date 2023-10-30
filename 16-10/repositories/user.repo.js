const User = require("../models/user.model")

const getUserById = async (id) => {
  return await User.findById(id)
}


const createUser = async ({email,password,name,dob}) => {
  return await User.create({ email, password, name, dob })
}
const userRepo = {
  getUserById,
  createUser
}
module.exports = userRepo