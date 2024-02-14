import React from "react";
import CustomTextField from "../../common/CustomTextField/CustomTextField";
import useLoginFormHandler from "./hooks/useLoginFormHandler";
import { Link } from "react-router-dom";

const LoginFields = (props) => {
  const { name, authenticationTitle, buttonTitle } = props;
  const { handleLoginFields, handleLogin } = useLoginFormHandler();

  return (
    <section className="flex px-24 py-10 bg-[#121212] rounded-md flex-col gap-2">
      <p className="text-[#fff] text-5xl mb-10 font-bold">
        {authenticationTitle}
      </p>
      <div className="h-[0.1px] bg-[#727272] w-full"></div>
      <section className="flex  px-14 py-10 flex-col gap-3">
        <p className="text-[#fff] font-bold text-left text-xs">
          Email or username
        </p>
        <CustomTextField
          name="email"
          placeholder="Email or username"
          helperText="Please Enter valid Email"
          isError={false}
          handleChange={handleLoginFields}
        />

        <p className="text-white font-bold text-left text-xs">Password</p>
        <CustomTextField
          name="password"
          placeholder="Password"
          helperText="Please Enter valid Password"
          isError={false}
          handleChange={handleLoginFields}
        />

        <button
          className="bg-[#1BD760] rounded-full py-3 mt-4 font-bold hover:bg-[#29df6c]"
          onClick={() => handleLogin(name)}
        >
          {buttonTitle}
        </button>
        <p className="text-[#fff] font-bold mt-5 text-xs flex text-center justify-center underline cursor-pointer">
          Forgot your password?
        </p>
      </section>
      <div className="h-[0.5px] bg-[#727272] w-full"></div>
      {name === "login" ? (
        <Link to={"/signup"}>
          <p className="text-[#fff] font-bold mt-5 text-xs flex text-center justify-center cursor-pointer">
            Don't have an account? Sign up for Spotify
          </p>
        </Link>
      ) : (
        <Link to={"/login"}>
          <p className="text-[#fff] font-bold mt-5 text-xs flex text-center justify-center cursor-pointer">
            Already have an Account? Login
          </p>
        </Link>
      )}
    </section>
  );
};

export default LoginFields;
