import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterUserType } from "../types";
import { Toaster } from "react-hot-toast";
import Input from "../components/Input";
import { RegisterUser } from "../functions";
import Button from "../components/Button";

const Register = () => {
  const [loading, setloading] = useState(false);
  const [registerDetails, setregisterDetails] = useState<RegisterUserType>({
    name: "",
    email: "",
    password: "",
  });
  const [c_password, setc_password] = useState<string>("");

  return (
    <main className={`h-screen w-screen justify-center items-center flex`}>
      <div className="px-8 sm:h-[600px] w-full sm:w-[450px] flex items-center flex-col justify-center flex-wrap">
        <Toaster />
        <h1 className="text-left flex flex-col w-full text-pry-color px-2 text-3xl mb-6 font-bold">
          Create an Account
          <span className="text-xs font-normal text-gray-400">
            Create an account and never miss a single sport update
          </span>
        </h1>
        <Input
          type={"text"}
          placeholder={"Full Name"}
          label="Full Name"
          error={false}
          onChange={(e: any) =>
            setregisterDetails({ ...registerDetails, name: e.target.value })
          }
        />
        <Input
          type={"email"}
          label="Email"
          placeholder={"Email Address"}
          onChange={(e: any) =>
            setregisterDetails({ ...registerDetails, email: e.target.value })
          }
        />
        <Input
          type={"password"}
          label="Password"
          placeholder={"Password"}
          onChange={(e: any) => {
            setregisterDetails({
              ...registerDetails,
              password: e.target.value,
            });
          }}
        />
        <Input
          type={"password"}
          label="Confirm Password"
          placeholder={"Confirm Password"}
          error={c_password !== registerDetails.password}
          onChange={(e: any) => setc_password(e.target.value)}
        />
        <Button
          onClick={() => RegisterUser(registerDetails, setloading)}
          text="Create Account"
          loading={loading}
        />
        <Link className="text-sm mt-1 text-pry-color ml-auto" to={"/"}>
          Already have an account?
        </Link>
      </div>
    </main>
  );
};

export default Register;
