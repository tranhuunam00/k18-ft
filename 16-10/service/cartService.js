const { default: mongoose } = require("mongoose");
const ProductSizeColor = require("../models/productSizeColor.model");
const CartRepo = require("../repositories/cart.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");

const createCart = async (data, customer) => {
  const { productSizeColorId, amount } = data;
  console.log(data);
  if (
    !productSizeColorId ||
    !amount |
    +amount < 0 ||
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
    console.log("newAmount",newAmount);
    await CartRepo.update(
      {
        _id: existCart._id
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

const cartService = {
  createCart,
};
module.exports = cartService;
