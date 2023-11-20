import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => {
  const { theme } = useContext(UserContext);
  console.log("theme", theme);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};
export default App;