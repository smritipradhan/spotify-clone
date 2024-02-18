import React from "react";
import styles from "./ArtistPlaylistCard.module.scss";

const ArtistPlaylistCard = (props) => {
  const { title, details, background } = props.data;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={background} />
      </div>
      <div className={styles.details}>
        <div className={styles.artistName}>{title}</div>
        <div className={styles.about}> {details}</div>
      </div>
    </div>
  );
};

export default ArtistPlaylistCard;
