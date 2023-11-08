/** @format */

const Seller = require('../models/seller.model');

const getSellerById = async (id) => {
   return await Seller.findById(id);
};

const getSellerByCondition = async (filter = {}) => {
   return await Seller.findOne(filter);
};
const createSeller = async (data) => {
   return await Seller.create(data);
};

const deleteU = async (filter) => {
   return await Seller.deleteOne(filter);
};

const update = async (filter, data) => {
   return await Seller.updateOne(filter, data);
};
const sellerRepo = {
   getSellerById,
   getSellerByCondition,
   createSeller,
   deleteU,
   update,
};
module.exports = sellerRepo;
