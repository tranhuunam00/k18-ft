const express = require("express");
const qs = require("querystring");
var bodyParser = require("body-parser");
const STATUS_CODE = require("./constants/httpResponseCode");
const ERROR_MESSAGE = require("./constants/httpErrorMessage");
const UTIL_HELPER = require("./helper/util");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const randomUsersInit = (number) => {
  const users = [];
  for (let i = 1; i <= number; i++) {
    //todo
    users.push({
      id: new Date(),
      ["name"]: `name ${i}`,
      age: i + 19,
      password: "123456",
      email: `${i}@gmail.com`,
    });
  }
  return users;
};
let users = randomUsersInit(10);

app.post("/signup", (req, res) => {
  console.log("-----get---signup----START---");
  // login
  const { email, password, name, age } = req.body;
  //1. check type và dữ liệu
  if (!email || !password || !name || !age) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: ERROR_MESSAGE.dataNotVerify,
      data: null,
    });
  }
  //2. check định dạng email
  if (!UTIL_HELPER.validateEmail(email)) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: ERROR_MESSAGE.emailNotVerify,
      data: null,
    });
  }

  // 3. password dài hơn 6 kí tự
  // hoặc n điều kiện cho pw
  if (!UTIL_HELPER.validatePassword(password)) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: ERROR_MESSAGE.passwordNotVerify,
      data: null,
    });
  }

  // 4. check email tồn tại
  const exitedUser = users.find((user) => user.email === email);
  if (exitedUser) {
    return res.status(STATUS_CODE.badRequest).json({
      error: true,
      message: ERROR_MESSAGE.existedUser,
      data: null,
    });
  }
  console.log("-----get---signup----END---");
  res.json("đăng kí thành công");
});

app.listen(3000, function () {
  console.log("Server is listening at 3000");
});
