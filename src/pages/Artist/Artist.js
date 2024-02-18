import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";

import React from "react";
import Footer from "../../components/Footer/Footer";
import SpotifyHeader from "../../components/SpotifyHeader/SpotifyHeader";
import Container from "../Container/Container";
import classes from "./Artist.module.scss";
import SongsTable from "./Table";

const Artist = () => {
  return (
    <Container>
      <div className={classes.artistContainer}>
        <div className={classes.artistHeader}>
          <SpotifyHeader />
          <div>
            <p className={classes.artist}>Anuv Jain</p>
            <p className={classes.subscriber}>11,340,690 monthly listeners</p>
          </div>
        </div>
        <div className={classes.artistMainContainer}>
          <div className={classes.playButton}>
            <PlayCircleFilledOutlinedIcon className={classes.play} />
            <div className={classes.following}>Following</div>
          </div>
          <p className={classes.popular}>Popular</p>
          <SongsTable />
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Artist;
