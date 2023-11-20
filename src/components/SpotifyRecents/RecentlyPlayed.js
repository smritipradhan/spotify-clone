import React from "react";
import styles from "./RecentlyPlayed.module.scss";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";

const RecentlyPlayed = () => {
  return (
    <div className={styles.recentlyPlayedContainer}>
      <SongsHeaderShowAll title={"Recently played"} />
    </div>
  );
};

export default RecentlyPlayed;
