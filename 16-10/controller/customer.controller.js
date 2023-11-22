const authService = require("../service/authService");
const customerService = require("../service/customerService");

const getAll = async (req, res) => {
  try {
    console.log("controller getAll");
    const data = await customerService.getAllCustomer()
    if (data?.error) {
      return res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const customerController = {
  getAll,
};
module.exports = customerController;
