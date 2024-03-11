import { useState } from "react";
import InputTextCustom from "../../../components/textInput/textInputCustomer";
import "./signIn.css";
import ButtonCustom from "../../../components/buttonCustom/buttonCustom";
import APP_IMAGES from "../../../assets/app_image";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../../components/toast/toast";
import DatePickerCustom from "../../../components/dateTimeCustom/datePickerCustomer";
import FileCustom from "../../../components/fileCustom/fileCustom";
const SignInPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    dob: undefined,
    file: undefined,
  });
  const [avatar, setAvatar] = useState({})
  const [load, setLoad] = useState(false); // 1 - n
  const disabled =
    !user.email ||
    !user.password ||
    !user.dob ||
    !user.file ||
    !user.phoneNumber;
  const signInAPi = async ({ email, password }) => {
    try {
      setLoad(true);
      await new Promise((res) => setTimeout(res, 2000));
      const formData = new FormData()
      Object.keys(user).forEach((key) => {
        console.log('key', key)
        if(key !="file")
        formData.append(key, user[key])
      })
      formData.append("file", avatar)
      for (const [key, value] of formData.entries()) {
        console.log(`Key: ${key}, Value: ${value}`);
      }
      console.log('-------',formData, user, avatar)
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
      //   headers: {
      //     'Content-Type': `multipart/form-data`
      // }, // m
        body: formData
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
  console.log("user", user);
  return (
    <div id="login">
      <h1>Đăng kií</h1>
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
          // errorMessage={user.email.length < 6 ? "Lỗi rồi" : null}
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
        <InputTextCustom
          lable="Số dien thoai"
          name="phoneNumber"
          onChange={(e) => {
            setUser({
              ...user,
              phoneNumber: e.target.value,
            });
          }}
          placeholder={"Vui lòng nhập mật khẩu"}
        />

        <InputTextCustom
          lable="Tên"
          name="name"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
          placeholder={"Vui lòng nhập mật khẩu"}
        />
      </div>
      <DatePickerCustom
        value={user.dob}
        name={"dob"}
        onChange={(e) => {
          const { name, value } = e.target;
          console.log("name, value ", name, value);
          setUser({
            ...user,
            dob: value,
          });
        }}
        label={"Ngay sinh"}
      />
      <FileCustom
        value={user.file}
        name={"file"}
        onChange={(e) => {
          const { name, value } = e.target;
          console.log('value', value, e.target, e.target.files[0])
          setUser({
            ...user,
            file: value,
          });
          setAvatar(e.target.files[0])
        }}
        label={"anh"}
      />
      <ButtonCustom
        title={"Đăng nhập"}
        onClick={
          disabled
            ? null
            : (e) => {
                signInAPi(user);
              }
        }
        loading={load}
        disabled={disabled}
      />
    </div>
  );
};
export default SignInPage;
