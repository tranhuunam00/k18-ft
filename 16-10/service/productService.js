const CONST_APP = require("../constants/constant");
const STATUS_CODE = require("../constants/httpResponseCode");
const ProductRepo = require("../repositories/product.repo");
const ProductColorImgRepo = require("../repositories/productColorImg.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");
const SellerRepo = require("../repositories/seller.repo");
const userRepo = require("../repositories/user.repo");
const { login } = require("./authService");

const getColors = async () => {
  return {
    data: CONST_APP.COLOR,
  };
};

const getSize = async () => {
  return {
    data: CONST_APP.SIZE,
  };
};

const createProduct = async (body, file, seller) => {
  const { name, price, amount } = body;

  console.log("create Product", file);
  if (!name || !file || !price || !amount)
    return {
      error: true,
      message: "Không đủ thông tin",
      code: 400
    };
  const newProduct = await ProductRepo.createProduct({
    sellerId: seller._id,
    name,
    img: file.filename,
  });

  await Promise.all([
    ProductSizeColorRepo.createProductSizeColor({
      productId: newProduct._id,
      sizeCode: CONST_APP.SIZE.DEFAULT.code,
      colorCode: CONST_APP.COLOR.DEFAULT.code,
      price,
      amount,
    }),

    ProductColorImgRepo.createProductColorImg({
      productId: newProduct._id,
      colorCode: CONST_APP.COLOR.DEFAULT.code,
      img: [file.filename],
    }),
  ]);
  return {
    data: newProduct,
  };
};


const createSizeColor = async (body, files) => {
  console.log("files",files);
  console.log("body",body);

  
}
const productService = {
  getColors,
  getSize,
  createProduct,
  createSizeColor
};
module.exports = productService;
