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

const getAllByCondition = async (filter = {}, pagination, sort = 1) => {
  const { limit, page } = pagination;
  if (limit && page && limit > 0 && page > 0) {
    const offset = (+page - 1) * +limit;
    return await Cart.find(filter)
      .sort({ createdAt: +sort})
      .skip(offset)
      .limit(+limit);
  }
  return await Cart.find(filter).sort({ createdAt: +sort });
};

const count = async (filter) => {
  return await Cart.count(filter);
};
const CartRepo = {
  getCartById,
  createCart,
  getCartByCondition,
  deleteU,
  update,
  getAllByCondition,
  count,
};
module.exports = CartRepo;
