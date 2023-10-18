const express = require("express");
const qs = require("querystring");
var bodyParser = require("body-parser");
const STATUS_CODE = require("./constants/httpResponseCode");
const ERROR_MESSAGE = require("./constants/httpErrorMessage");
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
  // check định dạng email
  console.log("-----get---signup----END---");
  res.json("đăng kí thành công");
});

app.listen(3000, function () {
  console.log("Server is listening at 3000");
});
