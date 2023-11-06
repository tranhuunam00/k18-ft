const authService = require("../service/authService");

const getAll = async (req, res) => {
  try {
    console.log("controller getAll");
    const data = await authService.login(req.body);
    console.log("data", data);
    if (data?.error) {
      res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const customerController = {
  login,
};
module.exports = customerController;
