const orderService = require("../service/orderService");

const createOrder = async (req, res) => {
  try {
    console.log("create Order");
    const data = await orderService.createOrder(req.body, req.customer);
    console.log("data", data);
    if (data?.error) {
      res.status(data.code).json(data.message);
    }
    return res.status(201).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const OrderController = {
  createOrder,
};

module.exports = OrderController;
