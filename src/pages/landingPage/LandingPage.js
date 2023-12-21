import MadeFor from "../../components/MadeFor/MadeFor";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import SpotifyMostPlayed from "../../components/SpotifyMostPlayed/SpotifyMostPlayed";
import RecentlyPlayed from "../../components/SpotifyRecents/RecentlyPlayed";
import styles from "./LandingPage.module.scss";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div className={styles.main}>
      <SpotifyHeader />
      <SpotifyMostPlayed />
      <RecentlyPlayed />
      <MadeFor />
      <Footer />
    </div>
  );
};

export default LandingPage;
