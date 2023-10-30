const mongoose = require("mongoose");
const Seller = mongoose.model("sellers", {
  id: String,
  avatar: String,
  phoneNumber:String
});

module.exports = Seller