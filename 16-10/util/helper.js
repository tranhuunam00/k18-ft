const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "k18";

const hashPw = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const comparePassWordMd5 = async (password, hashPass) => {
  return await bcrypt.compare(password, hashPass);
};

const generateJwtToken = (data, expireTime = 30) => {
  const signature = jwt.sign({ ...data }, SECRET, { expiresIn: expireTime });
  return signature;
};

const decodeToken = (token) => {
  return jwt.verify(token, SECRET);
};

const getPagination = (pagination) => {
  const { limit, page } = pagination;
  if (!limit || +limit < 0 || Math.floor(+limit) != +limit) {
    pagination.limit = 5;
  }
  if (!page || +page < 0 || Math.floor(+page) != +page) {
    pagination.page = 1;
  }
  pagination.limit = +pagination.limit;
  pagination.page = +pagination.page;
  return pagination;
};
const HelperApp = {
  hashPw,
  comparePassWordMd5,
  generateJwtToken,
  decodeToken,
  getPagination,
};

module.exports = HelperApp;
