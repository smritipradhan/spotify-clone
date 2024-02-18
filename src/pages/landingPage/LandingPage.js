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
import { songActions } from "../../store/slices/songsSlice";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const getSong = async () => {
    const songData = await getData("/song");
    console.log(songData);
    dispatch(songActions.addSongs(songData?.data?.data));
  };

  useEffect(() => {
    getSong();
  }, []);

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
