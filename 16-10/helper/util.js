const bcrypt = require("bcrypt");

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
const UTIL_HELPER = {
  validateEmail,
  validatePassword,
  hashPassword,
};
module.exports = UTIL_HELPER;
