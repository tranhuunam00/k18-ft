const Order = require("../models/order.model");

const getOrderById = async (id) => {
  return await Order.findById(id);
};

const getOrderByCondition = async (filter = {}) => {
  return await Order.findOne(filter);
};
const createOrder = async (data) => {
  return await Order.create(data);
};

const deleteU = async (filter) => {
  return await Order.deleteOne(filter);
};

const update = async (filter, data) => {
  return await Order.updateOne(filter, data);
};

const getAllByCondition = async (filter = {}, pagination, sort = 1) => {
  const { limit, page } = pagination;
  if (limit && page && limit > 0 && page > 0) {
    const offset = (+page - 1) * +limit;
    return await Order.find(filter)
      .sort({ createdAt: +sort })
      .skip(offset)
      .limit(+limit);
  }
  return await Order.find(filter).sort({ createdAt: +sort });
};

// 2 , 4, 5 ,6 , 213, 24, 324, 432, 324  : 0 - 5 : skip = 0 limit = 5
// skip = 5 và limit = 5
// 4 - 2 :
// 432 324
const count = async (filter) => {
  return await Order.count(filter);
};
const OrderRepo = {
  getOrderById,
  createOrder,
  getOrderByCondition,
  deleteU,
  update,
  getAllByCondition,
  count,
};
module.exports = OrderRepo;
