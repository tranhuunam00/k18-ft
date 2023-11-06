const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
const connectMongo = require("./models/connect");
const authRouter = require("./route/auth.route");
const userRouter = require("./route/user.route");

app.use(cors());

app.use(express.static("public"));
app.use("/auth", authRouter);
app.use("/user", userRouter);

connectMongo();

app.listen(3000, function () {
  console.log("Server is listening at 3000");
});
