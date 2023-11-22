const ProductColorImg = require("../models/productColorImg.model");

const getProductColorImgById = async (id) => {
  return await ProductColorImg.findById(id);
};

const getAllByCondition = async (filter = {}) => {
  return await ProductColorImg.find(filter);
};
const getProductColorImgByCondition = async (filter = {}) => {
  return await ProductColorImg.findOne(filter);
};
const createProductColorImg = async (data) => {
  return await ProductColorImg.create(data);
};

const deleteU = async (filter) => {
  return await ProductColorImg.deleteOne(filter);
};

const update = async (filter, data) => {
  return await ProductColorImg.updateOne(filter, data);
};
const ProductColorImgRepo = {
  getProductColorImgById,
  createProductColorImg,
  getProductColorImgByCondition,
  deleteU,
  update,
  getAllByCondition
};
module.exports = ProductColorImgRepo;
