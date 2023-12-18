import InputTextCustom from "../../../components/textInputCustomer";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <InputTextCustom
        lable="Email"
        name="email"
        onChange={(e) => {
          console.log("e", e.target.value);
        }}
      />
      <InputTextCustom lable="PW" name="password" />
      <InputTextCustom />
      <InputTextCustom />
      <InputTextCustom />
    </div>
  );
};
export default LoginPage;
