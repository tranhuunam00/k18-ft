const { default: mongoose } = require("mongoose");
const ProductSizeColor = require("../models/productSizeColor.model");
const orderRepo = require("../repositories/order.repo");
const ProductSizeColorRepo = require("../repositories/productSizeColor.repo");
const ProductRepo = require("../repositories/product.repo");
const ProductColorImgRepo = require("../repositories/productColorImg.repo");
const HelperApp = require("../util/helper");

const createOrder = async (data, customer) => {
  return {
    data: true,
  };
};

const orderService = {
  createOrder,
};
module.exports = orderService;
