import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import PrivateRoutes from "./PrivateRoutes";
import SignUp from "./pages/SignUp/SignUp";
import ArtistPage from "./pages/artistPage/ArtistPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/loginPage/Login";
import { Playlist } from "./pages/playlistPage/Playlist";

const App = () => {
  return (
    <div className={styles.landingPageContainer}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
