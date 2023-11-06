const Customer = require("../models/customer.model");

const getCustomerById = async (id) => {
  return await Customer.findById(id);
};

const getCustomerByCondition = async (filter = {}) => {
  return await Customer.findOne(filter);
};
const createCustomer = async (data) => {
  return await Customer.create(data);
};

const deleteU = async (filter) => {
  return await Customer.deleteOne(filter);
};

const update = async (filter, data) => {
  return await Customer.updateOne(filter, data);
};
const customerRepo = {
  getCustomerById,
  createCustomer,
  getCustomerByCondition,
  deleteU,
  update,
};
module.exports = customerRepo;
