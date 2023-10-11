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
  const { id_sort, id_tohon } = req.query;
  console.log("id_sort", id_sort);
  if (+id_sort === 1) {
    const data = users.sort((a, b) => a.id - b.id);
    res.json(data);
  }
  if (+id_sort === -1) {
    const data = users.sort((a, b) => -(a.id - b.id));
    res.json(data);
  }
  if (id_tohon) {
    const data = users.filter((value) => {
      return value.id > +id_tohon;
    });
    res.json(data);
  }
  res.json(users);
});

// app
app.listen(3000, function () {
  console.log("Server is listening at 3000");
});

// method: get  - post - delete -put
// path :
// callback (req,res)

// 1.query -- muc dich chinh de filter
