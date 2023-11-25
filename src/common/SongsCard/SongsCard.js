import React from "react";
import styles from "./SongsCard.module.scss";
import DummyImage from "../../assets/images/spotifySongDummy.svg";

const SongsCard = () => {
  return (
    <div className={styles.recentlyPlayedCard}>
      <img src={DummyImage} />
      <div className={styles.songName}>Daily Mix 1</div>
      <div className={styles.songAbout}>Sanjith Hegde, Rahil Dit O</div>
    </div>
  );
};

export default SongsCard;
