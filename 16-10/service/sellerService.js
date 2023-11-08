const STATUS_CODE = require("../constants/httpResponseCode");
const SellerRepo = require("../repositories/seller.repo");
const userRepo = require("../repositories/user.repo");
const { login } = require("./authService");

const create = async (body, file, loginUser) => {
  console.log("file", file);
  const { name, phoneNumber } = body;
  console.log("body",body);
  const avatar = file?.filename;
  if ( !name || !phoneNumber || !avatar) {
    return {
      error: true,
      message: "Vui lòng nhập đủ",
      code: STATUS_CODE.badRequest,
    };
  }
  const seller = await SellerRepo.createSeller({
    userId: loginUser.id,
    name,
    phoneNumber,
    avatar,
  });

  await SellerRepo.deleteU({
    _id: seller._id
  })

  return {
    data: seller,
  };
};


const getAllSeller = async () => {
  const data = await SellerRepo.getSellersByCondition()
  return {
    data
  }
}
const sellerService = {
  create,
  getAllSeller
};
module.exports = sellerService;
