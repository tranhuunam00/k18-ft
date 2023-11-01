const userRepo = require("../repositories/user.repo");
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

const signup = async (data) => {
  console.log("sign up RUNNING");

  const { name, email, password, dob } = data;
  console.log("---------------------1-----");
  // vẻify
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
  await userRepo.deleteU({
    email,
  });
  const newUser = await userRepo.createUser({
    name,
    email,
    password,
    dob,
    status: 1,
  });
  await NodeMailerLib({
    to: email,
    subject: "Xác thực k18",
    text: `http://localhost:3000/auth/signup-confirm?id=${newUser.id}`,
  });
};

const signupConfirm = async (data) => {
  const { id } = data;
  console.log(id);
  const user = await userRepo.getUserByCondition({
    status: 1,
    id:id
  })
  if (user) {
    console.log("user", user);
    await userRepo.update({ _id: id }, { status: 2 })
  } else {
    return {
      data:"That bai"
    }
  }
};

const authService = {
  login,
  signup,
  signupConfirm,
};
module.exports = authService;
