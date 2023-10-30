const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
const connectMongo = require("./models/connect");
const authRouter = require("./route/auth.route");

app.use(cors());

app.use(express.static("public"));
app.use("/auth", authRouter);
connectMongo();

app.get("/savetestdb",(req,res)=>{
  const user = new User({ name: req.query.name,age:req.query.age });
  user.save().then(() => console.log('meow'));
  return res.json("luu thanh cong")
})
app.get("/findAlldb",async (req,res)=>{
  const data= await User.find();
  return res.json(data)
})
app.get("/put",async (req,res)=>{
  await User.updateOne({ _id: req.query.id }, { $set: { name: 'foo' } })
  return res.json("hehe")
})

app.listen(3000, function () {
  console.log("Server is listening at 3000");
});

