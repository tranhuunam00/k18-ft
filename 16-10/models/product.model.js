const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');

const productSchema = new Schema(
  {
    sellerId: {
      type: mongoose.Types.ObjectId,
      ref: "sellers",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      default: 1,
    },

    // status = 1: chưa accept mail 2: ok  3: ban
  },
  { timestamps: true }
);


productSchema.plugin(mongoose_delete, { deletedAt: true });
productSchema.plugin(mongoose_delete, { overrideMethods: true });
const Product = mongoose.model("products", productSchema);

module.exports = Product;
