const express = require("express");
const qs = require('querystring');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// b1. cho 1 mảng users

const randomUsersInit = (number) => {
  const users = [];
  for (let i = 1; i <= number; i++) {
    //todo
    users.push({
      id: i,
      ["name"]: `name ${i}`,
      age: i + 19,
      password: "123456"
    });
  }
  return users;
};
let users = randomUsersInit(10);

// viết 1 api truyền lên theo rep.query
// 1. lọc theo độ tuổi lớn hơn : age_gt: number
// 2. sắp xếp theo từ lớn đến bé theo id hoặc ngược lại
// 2. id_sort: -1 or 1
// 3. lọc theo keyword của name: vd k193 -> truyền lên 19 là nhận đc
// 3. name_search : string
// 4. lọc theo mảng ids

app.get("/users", (req, res) => {
  console.log("---get-users---STARTING");
  console.log(qs.stringify({ keyword: ' 1 '}));

  console.log('req.query', req.query)
  // query truyền sau dấu ?
  // tất cả query đều là string
  // nếu định lấy nhiều dữ liệu thì xấu nhất cũng trả về 1 mảng rỗng

  const { age_gt, id_sort, keyword, ids } = req.query;
  console.log(req.query);
  let newUsers = [...users];
  // lọc trước khi sắp xếp
  if (age_gt) {
    newUsers = newUsers.filter((user) => user.age > +age_gt);
  }
  if (keyword) {
    newUsers = newUsers.filter((user) => user.name.includes(keyword));
  }
  if (ids) {
    newUsers = newUsers.filter((user) => ids.includes(user.id + ""));
  }
  if (id_sort) {
    newUsers = newUsers.sort((a, b) => (a.id - b.id) * -id_sort);
  }

  console.log("---get-users---END");
  //http://localhost:3000/users?age_gt=25&id_sort=-1&ids=1&ids=9
  return res.json(newUsers);
});
app.get("/users/:id", (req, res) => {
  console.log("req.params", req.params);
  console.log(users);
  return res.json(users.find((user) => user.id === +req.params.id));
});

// api đăng kí
// restful api
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  // todo
  // check ....
  const newUser = {
    id: users.sort((a, b) => b.id - a.id)[0].id + 1,
    name,
    age,
  };
  users.push(newUser);

  res.json(newUser);
});

// api chỉnh sửa user
// restful api
app.put("/users/:id", (req, res) => {
  const { name, age } = req.body;
  const { id } = req.params;
  // 1. tìm user xem có tồn tại k \
  const existUser = users.find((user) => user.id === +id);
  const index = users.findIndex((user) => user.id === +id);
  if (!existUser) return res.json("user không tồn tại");
  const editUser = { ...existUser };

  if (name) {
    //check choác name
    editUser.name = name;
  }
  if (age) {
    //check choác name
    editUser.age = age;
  }
  users[index] = editUser;
  res.json(editUser);
});

// xóa user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  // check choác
  // 1. tìm user xem có tồn tại k
  // 1. tìm user xem có tồn tại k \
  const existUser = users.find((user) => user.id === +id);
  if (!existUser) return res.json("user không tồn tại");
  users = users.filter((user) => user.id !== +id);
  res.json("đã xóa");
});

// khởi tạo server chạy on port
app.listen(3000, function () {
  console.log("Server is listening at 3000");
});
// method -status code

// quy định :
// res.json:{statusCode: number,error:true||false,data:[] || {} || number}
