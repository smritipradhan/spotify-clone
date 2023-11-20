import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import SpotifyMostPlayed from "../../components/SpotifyMostPlayed/SpotifyMostPlayed";
import RecentlyPlayed from "../../components/SpotifyRecents/RecentlyPlayed";
import SideBar from "./../../components/SpotifySideBar/Sidebar/SideBar.js";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.sideBarAndMain}>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
        <div className={styles.main}>
          <SpotifyHeader />
          <SpotifyMostPlayed />
          <RecentlyPlayed />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
