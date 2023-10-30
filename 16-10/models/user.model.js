const mongoose = require('mongoose');
const User = mongoose.model("users", { name: String, age: Number });
module.exports = User
