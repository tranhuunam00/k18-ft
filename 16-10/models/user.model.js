const mongoose = require("mongoose");
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');
const userSchema = new Schema(
  {
    email: String, // String is shorthand for {type: String}
    password: String,
    name: String,
    dob: { type: Date, require: false }, // truyen len dang "2023-10-10"
    status: {
      type: Number,
      default: 1,
    },
    role: {
      type: Number,
      default: 1,
    },

    // status = 1: chưa accept mail 2: ok  3: ban
    // role  = 1: user bt , 2:admin
  },
  { timestamps: true }
);

userSchema.plugin(mongoose_delete, { deletedAt: true });
userSchema.plugin(mongoose_delete, { overrideMethods: true });

const User = mongoose.model("users", userSchema);
module.exports = User;
