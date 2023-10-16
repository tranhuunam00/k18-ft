const express = require("express");
const app = express();

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
    });
  }
  return users;
};
const users = randomUsersInit(10);

// viết 1 api truyền lên theo rep.query
// 1. lọc theo độ tuổi lớn hơn : age_gt: number
// 2. sắp xếp theo từ lớn đến bé theo id hoặc ngược lại
// 2. id_sort: -1 or 1
// 3. lọc theo keyword của name: vd k193 -> truyền lên 19 là nhận đc
// 3. name_search : string
// 4. lọc theo mảng ids

app.get("/users", (req, res) => {
  console.log("---get-users---STARTING");
  console.time("users");
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

  console.timeEnd("get users");
  console.log("---get-users---END");
  return res.json(newUsers);
});

// khởi tạo server chạy on port
app.listen(3000, function () {
  console.log("Server is listening at 3000");
});
