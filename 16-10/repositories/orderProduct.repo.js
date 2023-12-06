const OrderProduct = require("../models/order_product.model");

const getOrderProductById = async (id) => {
  return await OrderProduct.findById(id);
};

const getOrderProductByCondition = async (filter = {}) => {
  return await OrderProduct.findOne(filter);
};
const createOrderProduct = async (data) => {
  return await OrderProduct.create(data);
};

const deleteU = async (filter) => {
  return await OrderProduct.deleteOne(filter);
};

const update = async (filter, data) => {
  return await OrderProduct.updateOne(filter, data);
};

const getAllByCondition = async (filter = {}, pagination, sort = 1) => {
  const { limit, page } = pagination;
  if (limit && page && limit > 0 && page > 0) {
    const offset = (+page - 1) * +limit;
    return await OrderProduct.find(filter)
      .sort({ createdAt: +sort })
      .skip(offset)
      .limit(+limit);
  }
  return await OrderProduct.find(filter).sort({ createdAt: +sort });
};

// 2 , 4, 5 ,6 , 213, 24, 324, 432, 324  : 0 - 5 : skip = 0 limit = 5
// skip = 5 và limit = 5
// 4 - 2 :
// 432 324
const count = async (filter) => {
  return await OrderProduct.count(filter);
};
const OrderProductRepo = {
  getOrderProductById,
  createOrderProduct,
  getOrderProductByCondition,
  deleteU,
  update,
  getAllByCondition,
  count,
};
module.exports = OrderProductRepo;
