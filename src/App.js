import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import LandingPage from "./pages/landingPage/LandingPage";
import ArtistPage from "./pages/artistPage/ArtistPage";
import SideBar from "./components/SpotifySideBar/Sidebar/SideBar";
import KahoNaPyar from "./assets/songs/kahonaPyarHain.mp3";
import styles from "./App.module.scss";
import { Playlist } from "./pages/playlistPage/Playlist";

const App = () => {
  const { theme } = useContext(UserContext);
  console.log("theme", theme);
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.sideBarAndMain}>
        <SideBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artist/:artistId" element={<ArtistPage />} />
          <Route path="/playlist/:playlistId" element={<Playlist />} />
        </Routes>
      </div>
      {/* <div className={styles.player}>
        <audio src={KahoNaPyar} controls />
      </div> */}
    </div>
  );
};
export default App;
