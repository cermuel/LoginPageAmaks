import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { LoginUserType } from "../types";
import Input from "../components/Input";
import { LoginUser } from "../functions";
import Button from "../components/Button";

const Login = () => {
  const [loginDetails, setloginDetails] = useState<LoginUserType>({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const [showfpass, setshowfpass] = useState(false);

  return (
    <main className={` h-screen w-screen justify-center items-center flex`}>
      {/* {showfpass && <ForgotPassword setshowfpass={setshowfpass} />} */}
      <div className="px-8 sm:h-[600px] w-full sm:w-[400px] flex items-center flex-col justify-center flex-wrap">
        <Toaster />
        <h1 className="text-left flex flex-col w-full text-pry-color px-2 text-3xl mb-6 font-bold">
          Welcome Back 👋 ⚽️
        </h1>

        <Input
          type={"email"}
          label="Email"
          placeholder={"Email Address"}
          onChange={(e: any) =>
            setloginDetails({ ...loginDetails, email: e.target.value })
          }
        />
        <Input
          type={"password"}
          label="Password"
          placeholder={"Password"}
          onChange={(e: any) => {
            setloginDetails({
              ...loginDetails,
              password: e.target.value,
            });
          }}
        />

        <Button
          onClick={() => LoginUser(loginDetails, setloading)}
          text="Login"
          loading={loading}
        />
        <div className="w-full flex justify-between mt-1">
          <span
            className="text-sm text-pry-color cursor-pointer "
            onClick={() => setshowfpass(!showfpass)}
          >
            Forgot Password?
          </span>
          <Link className="text-sm text-pry-color" to={"/register"}>
            Don't have an account?
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
