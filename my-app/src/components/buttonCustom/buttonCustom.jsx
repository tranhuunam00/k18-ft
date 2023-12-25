import APP_IMAGES from "../../assets/app_image";

import("./buttonCustom.css");
const ButtonCustom = ({
  title,
  onClick = () => {
    console.log("đây là mặc định");
  },
  loading,
  disabled,
}) => {
  return (
    <div id="ButtonCustom">
      {!loading ? (
        <button className={disabled ? "disable" : ""} onClick={onClick}>
          {title}
        </button>
      ) : (
        <img src={APP_IMAGES.loading}></img>
      )}
    </div>
  );
};
export default ButtonCustom;
