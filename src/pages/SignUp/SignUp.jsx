import React, { useEffect } from "react";
import LoginFields from "../../components/LoginFields/LoginFields";
import CustomizedSnackbars from "../../common/Snackbar/CustomizedSnackbar";

const SignUp = () => {
  return (
    <section className="flex flex-grow bg-[#272727] h-full items-center justify-center">
      <LoginFields
        name="signup"
        authenticationTitle="Sign Up to Spotify"
        buttonTitle="Sign Up"
      />
      <CustomizedSnackbars />
    </section>
  );
};

export default SignUp;
