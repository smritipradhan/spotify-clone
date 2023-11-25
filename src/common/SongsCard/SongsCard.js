import React from "react";
import styles from "./SongsCard.module.scss";

const SongsCard = (props) => {
  const { songImage, title } = props;
  return (
    <div className={styles.recentlyPlayedCard}>
      <img src={songImage} alt={title} />
      <div className={styles.songName}>{title}</div>
      <div className={styles.songAbout}>Sanjith Hegde, Rahil Dit O</div>
    </div>
  );
};

export default SongsCard;
