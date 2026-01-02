import { toast } from "react-toastify";

export const ErrorMessage = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
  });
};

export const SuccessMessage = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
  });
};
