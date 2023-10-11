var express = require("express");
var app = express();

const users = [
  { id: 1, name: "k18" },
  { id: 2, name: "k19" },
  { id: 3, name: "k30" },
];

// khoi tao 1 duong dan
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  console.log(req.query);
  res.json(users);
  res.send("Hello World!");
});

// app
app.listen(3000, function () {
  console.log("Server is listening at 3000");
});

// method: get  - post - delete -put
// path :
// callback (req,res)

// 1.query -- muc dich chinh de filter
