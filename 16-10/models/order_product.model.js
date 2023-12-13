const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require("mongoose-delete");
const orderProductSchema = new Schema(
  {
    productSizeColorId: {
      type: mongoose.Types.ObjectId,
      ref: "product-size-colors",
      require: true,
    },
    orderId: {
      type: mongoose.Types.ObjectId,
      ref: "orders",
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },

    // status = 1: chưa accept mail 2: ok  3: ban
    // role  = 1: user bt , 2:admin
  },
  { timestamps: true }
);

orderProductSchema.plugin(mongoose_delete, { deletedAt: true });
orderProductSchema.plugin(mongoose_delete, { overrideMethods: true });

const OrderProduct = mongoose.model("orderProducts", orderProductSchema);
module.exports = OrderProduct;
