import React from "react";
import LoginFields from "../../components/LoginFields/LoginFields";
import Header from "./Header";

const Login = () => {
  return (
    <section className="flex flex-col h-full">
      <Header />
      <section className="flex flex-grow bg-[#272727] h-full items-center justify-center">
        <LoginFields
          name="login"
          authenticationTitle="Login to Spotify"
          buttonTitle="Login"
        />
      </section>
    </section>
  );
};

export default Login;
