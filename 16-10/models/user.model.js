const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String,
  name: String,
  dob: { type: Date, require: false },
  status: {
    type: Number,
    default: 1,
  },
});
const User = mongoose.model("users", userSchema);
module.exports = User;
