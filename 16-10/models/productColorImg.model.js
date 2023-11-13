const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');

const productColorImgSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: true
    },
    colorCode: {
      type: String,
      required: true
    },
    img: {
      type: [String],
      required: true
    },
  },
  { timestamps: true }
);


productColorImgSchema.plugin(mongoose_delete, { deletedAt: true });
productColorImgSchema.plugin(mongoose_delete, { overrideMethods: true });
const ProductColorImg = mongoose.model("product-color-imgs", productColorImgSchema);

module.exports = ProductColorImg;
