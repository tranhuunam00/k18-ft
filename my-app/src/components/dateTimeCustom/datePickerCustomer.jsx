const DatePickerCustom = ({ label, onChange , name, value }) => {
  return (
    <div>
      <h1>{label}</h1>
      <input
        value={value}
        name={name}
        onChange={(event) => {
          onChange(event);
        }}
        type="date"
      />
    </div>
  );
};
export default DatePickerCustom;
