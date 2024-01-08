import { toast } from "react-toastify";

export const toastSuccess = (data) => {
  return toast.success(data);
};
export const toastError = (data) => {
  return toast.error(data);
};
