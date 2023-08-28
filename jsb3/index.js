// Kiểm tra xem người dùng có nhập đầy đủ thông tin hay không.
// Nếu cả hai trường đều đã được điền đầy đủ, thực hiện kiểm tra đăng nhập:
// Mật khẩu phải lớn hơn 6 kí tự
// Nếu tên người dùng và mật khẩu đúng đối với tài khoản quản trị viên ("admin", "admin123"), hiển thị thông báo "Chào mừng bạn, quản trị viên!".
// Nếu tên người dùng và mật khẩu đúng đối với tài khoản người dùng thường ("user", "user123"), hiển thị thông báo "Xin chào, người dùng!".
// Nếu không đúng với cả hai tài khoản trên, hiển thị thông báo lỗi "Sai tên người dùng hoặc mật khẩu!".
// Nếu người dùng không nhập đầy đủ thông tin, hiển thị thông báo "Vui lòng nhập đầy đủ tên người dùng và mật khẩu!".

const email = "";
const password = "";

const EMAIL_ADMIN = "admin";
const PASSWORD_ADMIN = "admin123";

const EMAIL_USER = "user";
const PASSWORD_USER = "user123";
// cách 1
function checkAuth(userName, password) {
  console.log("username ", userName);
  console.log("password ", password);

  // if này để check có giá trị hay không? :1
  if (!userName || !password) {
    return "Bạn phải nhập đủ thông tin";
  }
  // if 2
  if (typeof userName !== "string" || typeof password !== "string") {
    return "Bạn phải dung kiểu thông tin";
  }

  // if 3
  if (password.length <= 6) {
    return "Mật khẩu phải lớn hơn 6 kí tự";
  }

  if (password === PASSWORD_ADMIN && userName === EMAIL_ADMIN) {
    return "Day la admin";
  }

  if (password === PASSWORD_USER && userName === EMAIL_USER) {
    return "Day la user";
  }

  return "Tai khoan mk khong dung";
}

console.log(checkAuth("userName", 123456));
//
console.log(checkAuth("userName"));

// check(a, b);
// yêu cầu giá trị giả về giống với ===
// trong hàm check không được sử dụng ===

// const check = function (a, b) {
//   return a == b && typeof a == typeof b;
// };

console.log("test === ", 1234 === "1234");
