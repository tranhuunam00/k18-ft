/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;
var mongoose_delete = require('mongoose-delete');

const sellerSchema = new Schema(
   {
      userId: {
         type: mongoose.Types.ObjectId,
         ref: 'users',
      },
      avatar: {
         type: String,
      },
      phoneNumber: String,
      status: {
         type: Number,
         default: 1,
      },

      // status = 1: chưa accept mail 2: ok  3: ban
   },
   {timestamps: true},
);

sellerSchema.plugin(mongoose_delete, {deletedAt: true});
sellerSchema.plugin(mongoose_delete, {overrideMethods: true});
const Seller = mongoose.model('sellers', sellerSchema);

module.exports = Seller;
