const createCart = async (req, res) => {
  try {
    console.log("create cart");
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

const cartController = {
  createCart,
};

module.exports = cartController;
