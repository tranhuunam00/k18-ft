const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');


const customerSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    avatar: {
      type: String,
    },
    phoneNumber: String,

    // status = 1: chưa accept mail 2: ok  3: ban
  },
  { timestamps: true }
);

customerSchema.plugin(mongoose_delete,  { deletedAt : true });
const Customer = mongoose.model("customers", customerSchema);
module.exports = Customer;
