/** @format */

// const customerService = require('../service/customerService');

const create = async (req, res) => {
   try {
      const data = await sellerService.createSeller();
      if (data?.error) {
         return res.status(data.code).json(data.message);
      }
      return res.status(200).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};

const sellerController = {
   create,
};
module.exports = sellerController;
