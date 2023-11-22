import React from "react";
import styles from "./SongsCard.module.scss";
import DummyImage from "../../assets/images/spotifySongDummy.svg";

const SongsCard = () => {
  return (
    <div className={styles.recentlyPlayedCard}>
      <img src={DummyImage} />
    </div>
  );
};

export default SongsCard;
