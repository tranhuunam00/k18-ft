/** @format */

const express = require('express');
const sellerController = require('../controller/seller.controller');
const sellerRouter = express.Router();

sellerRouter.post('/', sellerController.create);

module.exports = sellerRouter;
