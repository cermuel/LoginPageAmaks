import toast from "react-hot-toast";
import { LoginUserType, RegisterUserType } from "../types";

export const RegisterUser = (
  RegisterDetails: RegisterUserType,
  setloading: any
) => {
  setloading(true);
  if (
    RegisterDetails.email &&
    RegisterDetails.password &&
    RegisterDetails.name
  ) {
    toast.success("Successfully registered");
    setTimeout(() => {
      window.location.pathname = "/";
    }, 2000);
  } else {
    toast.error("Fill in all details");
    setloading(false);
  }
};

//LOGIN USER WITH EMAIL AND PASSWORD
export const LoginUser = (LoginDetails: LoginUserType, setloading: any) => {
  setloading(true);
  if (LoginDetails.email && LoginDetails.password) {
    toast.success("Successfully logged in");
    setTimeout(() => {
      window.location.pathname = "/live";
    }, 2000);
  } else {
    toast.error("Fill in all details");
    setloading(false);
  }
};
