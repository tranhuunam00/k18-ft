const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (pw) => {
  return pw?.trim().length > 6;
};

const hashPassword = async (pw) => {
  return await bcrypt.hash(pw, 10);
};

const comparePassword = async (pw, hash) => {
  return await bcrypt.compare(pw, hash);
};

const generateToken = (userId, expiresIn) => {
  // Tạo payload
  const payload = {
    userId: userId,
    exp: expiresIn,
  };

  // Ký token
  const token = jwt.sign(payload, "SECRET_k18");

  return token;
};
const UTIL_HELPER = {
  validateEmail,
  validatePassword,
  hashPassword,
  comparePassword,
  generateToken,
};
module.exports = UTIL_HELPER;
