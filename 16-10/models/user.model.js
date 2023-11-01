const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  name: String,
  dob: { type: Date, require: false },  // truyen len dang "2023-10-10"
  status: {
    type: Number,
    default: 1,
  },
  // status = 1: chưa accept mail 2: ok  3: ban
});
const User = mongoose.model("users", userSchema);
module.exports = User;
