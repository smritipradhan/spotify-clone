import React from "react";
import LoginFields from "../../components/LoginFields/LoginFields";

const SignUp = () => {
  return (
    <section className="flex flex-grow bg-[#272727] h-full items-center justify-center">
      <LoginFields
        name="signup"
        authenticationTitle="Sign Up to Spotify"
        buttonTitle="Sign Up"
      />
    </section>
  );
};

export default SignUp;
