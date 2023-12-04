const { default: mongoose } = require("mongoose");
const ProductSizeColor = require("../models/productSizeColor.model");
const CartRepo = require("../repositories/cart.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");
const ProductRepo = require("../repositories/product.repo");
const ProductColorImgRepo = require("../repositories/productColorImg.repo");
const HelperApp = require("../util/helper");

const createCart = async (data, customer) => {
  const { productSizeColorId, amount } = data;
  console.log(data);
  if (
    !productSizeColorId ||
    !amount | (+amount < 0) ||
    Math.floor(+amount) != +amount
  ) {
    return {
      error: true,
      message: "truyeefn thieeu",
      code: 400,
    };
  }
  const productSizeColor =
    await ProductSizeColorRepo.getProductSizeColorByCondition({
      _id: productSizeColorId,
    });
  console.log("productSizeColor", productSizeColor);
  if (!productSizeColor) {
    return {
      error: true,
      message: "tkhong co product size color",
      code: 404,
    };
  }

  const existCart = await CartRepo.getCartByCondition({
    productSizeColorId,
    customerId: customer._id,
  });
  // chua co ban ghi nao
  if (!existCart) {
    await CartRepo.createCart({
      productSizeColorId,
      customerId: customer._id,
      amount,
    });
  } else {
    // da co ban gi
    const amountOld = existCart.amount;
    const newAmount = amountOld + amount;
    console.log("newAmount", newAmount);
    await CartRepo.update(
      {
        _id: existCart._id,
      },
      {
        amount: newAmount,
      }
    );
  }
  return {
    data: true,
  };
};

const getCarts = async (query, customer) => {
  const pagination = HelperApp.getPagination(query);

  console.log("pagination", pagination);
  const count = await CartRepo.count({
    customerId: customer._id,
  });
  const data = await CartRepo.getAllByCondition(
    {
      customerId: customer._id,
    },
    pagination,
    query.sort || -1
  );
  const carts = JSON.parse(JSON.stringify(data));
  for (let cart of carts) {
    const productSizeColor = await ProductSizeColorRepo.getProductSizeColorById(
      cart.productSizeColorId
    );
    const [product, productImgs] = await Promise.all([
      ProductRepo.getProductById(productSizeColor.productId),
      ProductColorImgRepo.getProductColorImgByCondition({
        productId: productSizeColor.productId,
        colorCode: productSizeColor.colorCode,
      }),
    ]);
    console.log("cart", cart._id);
    console.log("productSizeColor", productSizeColor);
    cart.productSizeColor = productSizeColor;
    cart.product = product;
    cart.productImgs = productImgs;
  }
  return {
    data: {
      carts,
      totalPage: Math.floor(count / pagination.limit) + 1,
      pagination,
    },
  };
};
const cartService = {
  createCart,
  getCarts,
};
module.exports = cartService;
