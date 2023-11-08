const CONST_APP = require("../constants/constant");
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

const updateStatus = async (data) => {
  const { sellerId, status } = data
  if (!Object.values(CONST_APP.STATUS_SELLER).includes(+status)) {
    return {
      error: true,
      code: STATUS_CODE.badRequest,
      message:"Trạng thái truyền lên không đúng"
    }
  }
  if (!await SellerRepo.getSellerById(sellerId)) {
    return {
      error: true,
      code: STATUS_CODE.notFounded,
      message:"Người bán không tồn tại"
    }
  }

  await SellerRepo.update({
    _id: sellerId
  }, {
    status
  })
  return {
    data: true
  }
    
}

const sellerService = {
  create,
  getAllSeller,
  updateStatus
};
module.exports = sellerService;
