import React from "react";
import classes from "./ArtistPage.module.scss";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";

const ArtistPage = () => {
  return (
    <div className={classes.artistContainer}>
      <SpotifyHeader />
    </div>
  );
};

export default ArtistPage;
