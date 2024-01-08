import { useState } from "react";
import InputTextCustom from "../../../components/textInput/textInputCustomer";
import "./login.css";
import ButtonCustom from "../../../components/buttonCustom/buttonCustom";
import APP_IMAGES from "../../../assets/app_image";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../../components/toast/toast";
const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false); // 1 - n
  const disabled = !user.email || !user.password;
  const loginAPi = async ({ email, password }) => {
    try {
      setLoad(true);
      await new Promise((res) => setTimeout(res, 2000));
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // m
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log("data", data);
      if (!data.token) {
        toastError(data);
      } else {
        toastSuccess(data.token);
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  };
  console.log(
    "!!user.email && !!user.password",
    !!user.email && !!user.password
  );
  return (
    <div id="login">
      <h1>Login</h1>
      <div className="login_input">
        <InputTextCustom
          lable="Email"
          name="email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
          placeholder={"Vui lòng nhập email"}
          errorMessage={user.email.length < 6 ? "Lỗi rồi" : null}
        />
        <InputTextCustom
          lable="Mật khẩu"
          name="password"
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
          placeholder={"Vui lòng nhập mật khẩu"}
        />
      </div>

      <ButtonCustom
        title={"Đăng nhập"}
        onClick={
          disabled
            ? null
            : (e) => {
                loginAPi(user);
              }
        }
        loading={load}
        disabled={disabled}
      />
    </div>
  );
};
export default LoginPage;
