const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete'); // soft-delete

const sellerSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    avatar: {
      type: String,
    },
    phoneNumber: String,
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

// find if detele next


sellerSchema.plugin(mongoose_delete, { deletedAt: true });
sellerSchema.plugin(mongoose_delete, { overrideMethods: true });
const Seller = mongoose.model("sellers", sellerSchema);

module.exports = Seller;
