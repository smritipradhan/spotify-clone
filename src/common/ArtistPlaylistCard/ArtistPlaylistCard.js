import React from "react";
import styles from "./ArtistPlaylistCard.module.scss";

const ArtistPlaylistCard = (props) => {
  const { name, details } = props;
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.details}>
        <div className={styles.artistName}>{name}</div>
        <div className={styles.about}> {details}</div>
      </div>
    </div>
  );
};

export default ArtistPlaylistCard;
