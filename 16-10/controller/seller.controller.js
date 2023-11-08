/** @format */

const sellerService = require('../service/sellerService');

const createSeller = async (req, res) => {
   try {
      console.log('createSeller RUN');
      const data = await sellerService.create(req.body, req.file, req.loginUser);
      if (data?.error) {
         return res.status(data.code).json(data.message);
      }
      return res.status(200).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};

const getAllSeller = async (req, res) => {
   try {
      console.log('createSeller RUN');
      const data = await sellerService.getAllSeller();
      if (data?.error) {
         return res.status(data.code).json(data.message);
      }
      return res.status(200).json(data?.data);
   } catch (e) {
      return res.status(e?.status || 500).json(e.message);
   }
};
const sellerController = {
   createSeller,
   getAllSeller,
};
module.exports = sellerController;
