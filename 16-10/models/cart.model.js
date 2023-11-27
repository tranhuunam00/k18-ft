const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require("mongoose-delete");
const cartSchema = new Schema(
  {
    productSizeColorId: {
      type: mongoose.Types.ObjectId,
      ref: "product-size-colors",
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      ref: "customers",
    },
    amount: {
      type: Number,
    },
   

    // status = 1: chưa accept mail 2: ok  3: ban
    // role  = 1: user bt , 2:admin
  },
  { timestamps: true }
);

cartSchema.plugin(mongoose_delete, { deletedAt: true });
cartSchema.plugin(mongoose_delete, { overrideMethods: true });

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
