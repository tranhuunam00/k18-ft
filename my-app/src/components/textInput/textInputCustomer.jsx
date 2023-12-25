import "./textInputStyle.css";
const InputTextCustom = ({
  lable = "email",
  name = "email",
  onChange,
  placeholder,
  errorMessage,
}) => {
  return (
    <div className="InputTextCustom">
      <label htmlFor={name}>{lable}</label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        className={errorMessage ? "border_red" : ""}
        name={name}
        type="text"
        placeholder={placeholder}
      />
      <p className="error_message">{errorMessage}</p>
    </div>
  );
};

export default InputTextCustom;
