const Cart = require("../models/cart.model");

const getCartById = async (id) => {
  return await Cart.findById(id);
};

const getCartByCondition = async (filter = {}) => {
  return await Cart.findOne(filter);
};
const createCart = async (data) => {
  return await Cart.create(data);
};

const deleteU = async (filter) => {
  return await Cart.deleteOne(filter);
};

const update = async (filter, data) => {
  return await Cart.updateOne(filter, data);
};
const CartRepo = {
  getCartById,
  createCart,
  getCartByCondition,
  deleteU,
  update,
};
module.exports = CartRepo;
