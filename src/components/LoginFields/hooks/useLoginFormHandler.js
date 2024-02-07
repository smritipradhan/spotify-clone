import React from "react";

const useLoginFormHandler = () => {
  const handleLogin = (event, data) => {
    console.log(event, data);
  };

  return { handleLogin };
};

export default useLoginFormHandler;
