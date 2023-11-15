const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  avatar: {
    type: String,
  },
  phoneNumber: String,

  // status = 1: chưa accept mail 2: ok  3: ban
});
const Customer = mongoose.model("customers", customerSchema);
module.exports = Customer;
