/** @format */

const sellerService = require('../service/sellerService');

const create = async (req, res) => {
   try {
      const data = await sellerService.createSeller(req.body);
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
