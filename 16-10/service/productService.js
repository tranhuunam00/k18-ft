const CONST_APP = require("../constants/constant");
const STATUS_CODE = require("../constants/httpResponseCode");
const ProductRepo = require("../repositories/product.repo");
const ProductColorImgRepo = require("../repositories/productColorImg.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");
const SellerRepo = require("../repositories/seller.repo");
const userRepo = require("../repositories/user.repo");
const { login } = require("./authService");

const getColors = async (query) => {
  const { filter } = query;
  console.log(filter);
  const data = {};
  for (let key of Object.keys(CONST_APP.COLOR)) {
    if (key.toLowerCase().includes(filter.toLowerCase())) {
      data[key] = CONST_APP.COLOR[key];
    }
  }
  return {
    data,
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
      code: 400,
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

const createSizeColor = async (body, files, seller) => {
  console.log("files", files);
  console.log("body", body);
  const { price, amount, sizeCodes, colorCode, productId } = body;
  const product = await ProductRepo.getProductById(productId);
  console.log(product);
  console.log(seller._id);
  if (!product || product.sellerId.toString() != seller._id.toString()) {
    return {
      error: true,
      message: "Sản phẩm không tồn tại",
      code: 404,
    };
  }
  if (!price || !amount || !files?.length) {
    return {
      error: true,
      message: "Truyền sai",
      code: 404,
    };
  }
  if (
    sizeCodes.some((s) => {
      return !CONST_APP.SIZE[s];
    })
  ) {
    return {
      error: true,
      message: "Size không hợp lệ",
      code: 404,
    };
  }
  if (!CONST_APP.COLOR[colorCode]) {
    return {
      error: true,
      message: "Màu không hợp lệ",
      code: 404,
    };
  }
  const process = [];
  let error = false;
  for (let size of sizeCodes) {
    console.log("size", size);
    const data = await ProductSizeColorRepo.getProductSizeColorByCondition({
      productId,
      sizeCode: size,
      colorCode,
    });
    if (data) {
      error = true;
      break;
    }
    process.push(
      ProductSizeColorRepo.createProductSizeColor({
        productId,
        sizeCode: size,
        colorCode,
        price,
        amount,
      })
    );
  }
  if (error) {
    return {
      error: true,
      message: "Loại sản phẩm đã tồn tại. Vui lòng kiếm tra",
      code: 404,
    };
  }
  await Promise.all(process);
  await ProductColorImgRepo.createProductColorImg({
    productId,
    colorCode: CONST_APP.COLOR.DEFAULT.code,
    img: files.map((f) => f.filename),
  });
  return {
    data: true,
  };
};
const productService = {
  getColors,
  getSize,
  createProduct,
  createSizeColor,
};
module.exports = productService;
