const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');

const productSizeColorSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: true
    },
    sizeCode: {
      type: String,
      required: true
    },
    colorCode: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  },
  { timestamps: true }
);


productSizeColorSchema.plugin(mongoose_delete, { deletedAt: true });
productSizeColorSchema.plugin(mongoose_delete, { overrideMethods: true });
const ProductSizeColor = mongoose.model("product-size-colors", productSizeColorSchema);

module.exports = ProductSizeColor;
