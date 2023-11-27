
//Establishing the connection
var db = "mongodb+srv://23025029:syLlQ479NFLTrEyW@cluster0.hafwg7v.mongodb.net/k18"

const mongoose = require('mongoose');

const connectMongo = () => {
  mongoose.connect(db);
}

module.exports = connectMongo