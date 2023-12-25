const InputTextCustom = ({ lable = "email", name = "email", onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{lable}</label>
      <input
        onChange={(e) => {
          onChange(e);
        }}
        name={name}
        type="text"
        placeholder={"moi nhap" + name}
      />
    </div>
  );
};
export default InputTextCustom;
