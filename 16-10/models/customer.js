const mongoose = require("mongoose");
const Customer = mongoose.model("customers", {
  id: String,
  avatar: String,
  phoneNumber:String
});

module.exports = User