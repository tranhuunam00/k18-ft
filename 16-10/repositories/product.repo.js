const Product = require("../models/product.model");

const getProductById = async (id) => {
  return await Product.findById(id);
};

const getAllByCondition = async (filter = {}) => {
  return await Product.find(filter);
};
const getProductByCondition = async (filter = {}) => {
  return await Product.findOne(filter);
};
const createProduct = async (data) => {
  return await Product.create(data);
};

const deleteU = async (filter) => {
  return await Product.deleteOne(filter);
};

const update = async (filter, data) => {
  return await Product.updateOne(filter, data);
};
const ProductRepo = {
  getProductById,
  createProduct,
  getProductByCondition,
  deleteU,
  update,
  getAllByCondition
};
module.exports = ProductRepo;
