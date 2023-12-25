import { useState } from "react";
import InputTextCustom from "../../../components/textInputCustomer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <InputTextCustom
        lable="Email"
        name="email"
        onChange={(e) => {
          console.log("e", e.target.value);
          setEmail(e.target.value);
        }}
      />
      <InputTextCustom
        lable="PW"
        name="password"
        onChange={(e) => {
          console.log("e", e.target.value);
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async (e) => {
          const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" }, // m
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await response.json();
          console.log("response", data);
          alert(data);
        }}
      >
        Đăng nhập
      </button>
    </div>
  );
};
export default LoginPage;
