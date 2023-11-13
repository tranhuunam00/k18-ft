const ProductSizeColor = require("../models/productSizeColor.model");

const getProductSizeColorById = async (id) => {
  return await ProductSizeColor.findById(id);
};

const getAllByCondition = async (filter = {}) => {
  return await ProductSizeColor.find(filter);
};
const getProductSizeColorByCondition = async (filter = {}) => {
  return await ProductSizeColor.findOne(filter);
};
const createProductSizeColor = async (data) => {
  return await ProductSizeColor.create(data);
};

const deleteU = async (filter) => {
  return await ProductSizeColor.deleteOne(filter);
};

const update = async (filter, data) => {
  return await ProductSizeColor.updateOne(filter, data);
};
const ProductSizeColorRepo = {
  getProductSizeColorById,
  createProductSizeColor,
  getProductSizeColorByCondition,
  deleteU,
  update,
  getAllByCondition
};
module.exports = ProductSizeColorRepo;
