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
  };

  // Ký token
  const token = jwt.sign(payload, "SECRET_k18", { expiresIn });

  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, "SECRET_k18");
};
const UTIL_HELPER = {
  validateEmail,
  validatePassword,
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
};
module.exports = UTIL_HELPER;
