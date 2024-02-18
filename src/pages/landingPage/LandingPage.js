import MadeFor from "../../components/MadeFor/MadeFor";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import SpotifyMostPlayed from "../../components/SpotifyMostPlayed/SpotifyMostPlayed";
import RecentlyPlayed from "../../components/SpotifyRecents/RecentlyPlayed";
import styles from "./LandingPage.module.scss";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SpotifySideBar/Sidebar/SideBar";
import { getData } from "../../utils/apiUtils";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/slices/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Container from "../Container/Container";

const LandingPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Container>
      <section className={styles.main}>
        <SpotifyHeader />
        <SpotifyMostPlayed />
        <RecentlyPlayed />
        <MadeFor />
        <Footer />
      </section>
    </Container>
  );
};

export default LandingPage;
