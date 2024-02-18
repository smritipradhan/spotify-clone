import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import PrivateRoutes from "./PrivateRoutes";
import SignUp from "./pages/SignUp/SignUp";
import Artist from "./pages/Artist/Artist";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/loginPage/Login";
import { Playlist } from "./pages/playlistPage/Playlist";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <div className={styles.landingPageContainer}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/search" element={<Search />} />
          <Route path="/artist/:artistId" element={<Artist />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
