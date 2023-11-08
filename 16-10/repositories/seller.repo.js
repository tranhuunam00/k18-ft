/** @format */

const Seller = require('../models/seller.model');

const getSellerById = async (id) => {
   return await Seller.findById(id);
};
const getSellersByCondition = async (filter = {}) => {
   return await Seller.find(filter);
};

const getSellerByCondition = async (filter = {}) => {
   return await Seller.findOne(filter);
};
const createSeller = async (data) => {
   return await Seller.create(data);
};

const deleteU = async (filter) => {
   return await Seller.delete(filter);
};

const update = async (filter, data) => {
   return await Seller.updateOne(filter, data);
};
const SellerRepo = {
   getSellerById,
   createSeller,
   getSellerByCondition,
   deleteU,
   update,
   getSellersByCondition,
};
module.exports = SellerRepo;
