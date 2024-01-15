const FileCustom = ({ label, onChange , name, value }) => {
  return (
    <div>
      <h1>{label}</h1>
      <input
        value={value}
        name={name}
        onChange={(event) => {
          onChange(event);
        }}
        type="file"
      />
    </div>
  );
};
export default FileCustom;
