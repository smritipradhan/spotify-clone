import MadeFor from "../../components/MadeFor/MadeFor";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import SpotifyMostPlayed from "../../components/SpotifyMostPlayed/SpotifyMostPlayed";
import RecentlyPlayed from "../../components/SpotifyRecents/RecentlyPlayed";
import SideBar from "./../../components/SpotifySideBar/Sidebar/SideBar.js";
import styles from "./LandingPage.module.scss";
import KahoNaPyar from "./../../assets/songs/kahonaPyarHain.mp3";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.sideBarAndMain}>
        <SideBar />
        <div className={styles.main}>
          <SpotifyHeader />
          <SpotifyMostPlayed />
          <RecentlyPlayed />
          <MadeFor />
          <Footer />
        </div>
      </div>
      <div className={styles.player}>
        <audio src={KahoNaPyar} controls />
      </div>
    </div>
  );
};

export default LandingPage;
