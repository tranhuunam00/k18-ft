const CONST_APP = require("../constants/constant");
const productService = require("../service/productService");

const getColors = async (req, res) => {
  try {
    console.log("controller getColors");
    const data = await productService.getColors();
    if (data?.error) {
      return res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const getSize = async (req, res) => {
  try {
    console.log("controller getSize");
    const data = await productService.getSize();
    if (data?.error) {
      return res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const createProduct = async (req, res) => {
  try {
    console.log("controller createProduct");
    const data = await productService.createProduct(
      req.body,
      req.file,
      req[CONST_APP.PERSON.seller]
    );
    if (data?.error) {
      return res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};

const createSizeColor = async (req, res) => {
  try {
    console.log("controller createSizeColor");
    const data = await productService.createSizeColor(
      req.body,
      req.files,
      req[CONST_APP.PERSON.seller]
    );
    if (data?.error) {
      return res.status(data.code).json(data.message);
    }
    return res.status(200).json(data?.data);
  } catch (e) {
    return res.status(e?.status || 500).json(e.message);
  }
};
const productController = {
  getColors,
  getSize,
  createProduct,
  createSizeColor
};
module.exports = productController;
