import React from "react";
import classes from "./ArtistPage.module.scss";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import Footer from "../../components/Footer/Footer";

const ArtistPage = () => {
  return (
    <div className={classes.artistContainer}>
      <SpotifyHeader />
      <Footer />
    </div>
  );
};

export default ArtistPage;
