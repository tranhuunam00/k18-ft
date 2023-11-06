const STATUS_CODE = require("../constants/httpResponseCode");
const customerRepo = require("../repositories/customer.repo");
const userRepo = require("../repositories/user.repo");
const HelperApp = require("../util/helper");
const NodeMailerLib = require("../util/nodemailer");

const login = async (data) => {
  try {
    const { email, password } = data;
    const user = await userRepo.getUserByCondition({
      status: 2,
      email,
      password,
    });
    if (!user) {
      return {
        error: true,
        code: 404,
        message: "User không tồn tại",
      };
    }
    return {
      data: user,
    };
  } catch (e) {}
};

const signup = async (data, file) => {
  console.log("sign up RUNNING");

  const { name, email, password, dob, phoneNumber } = data;

  // 1. verify data
  if (!name || !email || !password || !phoneNumber) {
    return {
      error: true,
      code: STATUS_CODE.badRequest,
      message: "Nhập đủ thông tin",
    };
  }

  const user = await userRepo.getUserByCondition({
    email,
    status: 2,
  });

  if (user) {
    return {
      error: true,
      code: 400,
      message: "User da ton tai",
    };
  }

  const oldUser = await userRepo.getUserByCondition({
    email: email,
    status: 1,
  });
  if (oldUser) {
    await userRepo.deleteU({
      email,
    });
    await customerRepo.deleteU({
      userId: oldUser._id,
    });
  }

  const newUser = await userRepo.createUser({
    name,
    email,
    password: await HelperApp.hashPw(password),
    dob,
    status: 1,
  });
  console.log(file);
  const newCustomer = await customerRepo.createCustomer({
    avatar: file?.filename,
    phoneNumber,
    userId: newUser._id,
  });

  const token = HelperApp.generateJwtToken({
    id: newUser._id,
  });

  // await NodeMailerLib({
  //   to: email,
  //   subject: "Xác thực k18",
  //   text: `http://localhost:3000/auth/signup-confirm?token=${token}`,
  // });
  return {
    data: token,
  };
};

const signupConfirm = async (data) => {
  const { token } = data;
  const { id } = HelperApp.decodeToken(token);
  console.log(id);
  const user = await userRepo.getUserByCondition({
    status: 1,
    id: id,
  });
  if (user) {
    console.log("user", user);
    await userRepo.update({ _id: id }, { status: 2 });
  } else {
    return {
      data: "That bai",
    };
  }
};

const authService = {
  login,
  signup,
  signupConfirm,
};
module.exports = authService;
