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

  if (!userName || !password) {
    return "Bạn phải nhập đủ thông tin";
  }

  if (password.length <= 6) {
    return "Mật khẩu phải lớn hơn 6 kí tự";
  }
}
// case 2
const checkAuth2 = function (userName, password) {};

// case 3
const checkAuth3 = (userName, password) => {};

//\\

console.log(checkAuth("userName", "123456"));
//
console.log(checkAuth("userName"));
