// sinh ra 1 mang n phan tu user random // giá trụ truyền vào
// biến thì viết bằng camelCase
//  biến hằng số thì viết bằng snack_key

// const a = 5 % 2 === 0 ? 1 : 10 % 5 == 0 ? 2 : 3;
// let b;
// if (5 % 2 == 0) {
//   b = 1;
// } else {
//   if (10 % 5 == 0) {
//     b = 2;
//   } else {
//     b = 3;
//   }
// }
// console.log("a", a);

const randomUsers = (number = 5) => {
  const users = [];
  const KEY_PW = "password";
  for (let i = 1; i <= number; i++) {
    // const random = Math.floor(Math.random() * 100000);
    const newUserToPush = {
      id: i,
      ["userName"]: "userName" + i,
      [KEY_PW]: "password" + i,
      delele: i % 2 == 0 ? true : false, // toán tử 3 ngôi: i % 2 == 0 : điều kiện ? giá trị nếu đúng : giá trị nếu sai
    };
    users.push(newUserToPush);
  }
  return users;
};

const initUsers = randomUsers(3);

const login = (userName, password) => {
  // cach 1 lap qua
  // giá trị
  // let existUser = null;
  // for (let index in initUsers) {
  //   if (initUsers[index].userName === userName) {
  //     existUser = initUsers[index];
  //     break;
  //   }
  //   // muốn lấy 1 phần tử của mảng thì tên mảng [index]
  //   // lấy giá trị của user : {id:1,username:1,...}
  // }
  // console.log("existUser", existUser);

  // find : tỉm ra phần tử đầu tiên thỏa mãn
  // nó nhận 1 tham số duy nhất là 1 hàm : hàm này có nhận 2 tham số là value,index
  // find return true or false
  const existUser2 = initUsers.find((value, index) => {
    return value.userName === userName;
  });

  // callback
  // callback của find chỉ được phép return về true or false
  // nếu callback return về true thì find sẽ lấy giá trị value ở vòng for đó
  // nếu callback return về false tiếp tục chạy hết
  // nếu chạy hết mà k có thì ra undefined
  // find chỉ return 1 giá trị tìm đầu tiên hoặc underfined

  if (!existUser2) return "Bạn nhập sai tên đăng nhập!";
  if (existUser2.password !== password) {
    return "Bạn nhập sai mật khẩu";
  }
  if (existUser2.delele) {
    return "Tài khoản đã bị xóa";
  }
  return "Bạn đăng nhập thành công";
};

login("userName2");
const signUp = (userName, password) => {
  if (!userName || !password) return "Vui lòng nhập đủ thông tin!";
  // bắt buộc { id: 2, userName: 'userName2', password: 'password2', delele: true }

  const existUser = initUsers.find((user, index) => {
    return user.userName === userName;
  });

  // callback của find chỉ được phép return về 1 giá trị number : có thể âm dương
  // nếu callback return về dương thì sort sẽ lấy giá trị từ bé đến lớn
  // nếu callback return về âm sort sẽ lấy giá trị từ lớn đến bé
  // nếu không return mặc đinh từ bé đến lớn
  // sort chỉ return 1 mảng bằng mảng ban đầu đã sort

  if (existUser) {
    return "Tài khoản đã tồn tại";
  }

  //
  const sortUsers = initUsers.sort((pre, after) => {
    return pre.id - after.id;
  });

  const maxUser = sortUsers[sortUsers.length - 1];

  // const allIds = initUsers.map((value, index) => {
  //   return value.id;
  // });

  // callback của map chỉ được phép return về giá trị mình cần để ném vào mảng mới
  // nếu không return mặc đinh trả về 1 mảng bằng số lượng mảng ban đầu [giá trị là undefined]
  // map là dùng để biến đổi mảng band dầu thành mảng mới theo ý muốn
  // const maxId = Math.max(allIds);
  // console.log("maxID", maxId);

  const newUser = {
    userName: userName,
    password: password,
    id: maxUser.id + 1, //logic
    delete: false, // logic
  };

  initUsers.push(newUser);

  // tim duoc id cho user nay phải là id to nhất chưa được sử dụng
};

const forgotPassword = (userName, newPassword) => {
  if (!userName || !newPassword) return "Vui lòng nhập đủ dữ liệu";

  const existUser = initUsers.find((user, index) => {
    return user.userName === userName;
  });
  if (!existUser) return "Bạn nhập sai userName";

  // nếu mà có thì mình phải thay đổi mật khẩu
  const index = initUsers.findIndex((user, index) => {
    return user.userName === userName;
  });
  initUsers[index].password = newPassword;
};
console.log("------------------------------");
console.log("init", initUsers);
signUp("userName10", 10);
console.log("init sau khi đăng kí", initUsers);

console.log("mình đang nhập lần 1");
console.log(login("userName10", 10));
forgotPassword("userName10", 13);
console.log("init sau khiđổi mật khẩu", initUsers);

console.log(login("userName10", 10));
