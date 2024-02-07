import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { UserContext } from "./context/UserContext";
import ArtistPage from "./pages/artistPage/ArtistPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/loginPage/Login";
import { Playlist } from "./pages/playlistPage/Playlist";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  const { theme } = useContext(UserContext);

  return (
    <div className={styles.landingPageContainer}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/artist/:artistId" element={<ArtistPage />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
      </Routes>
    </div>
  );
};
export default App;
