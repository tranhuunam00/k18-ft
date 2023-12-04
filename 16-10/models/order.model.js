const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require("mongoose-delete");

export const TypePaymentEnum = {
  COD: "COD",
  BANK: "BANK",
};
const orderSchema = new Schema(
  {
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "customers",
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    tinhId: {
      type: String,
      require: true,
    },
    huyenId: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      require: false,
    },
    typePayment: {
      type: String,
      enum: Object.values(TypePaymentEnum),
      require: true,
    },

    // status = 1: chưa accept mail 2: ok  3: ban
    // role  = 1: user bt , 2:admin
  },
  { timestamps: true }
);

orderSchema.plugin(mongoose_delete, { deletedAt: true });
orderSchema.plugin(mongoose_delete, { overrideMethods: true });

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
