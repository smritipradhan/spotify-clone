import React from "react";
import styles from "./RecentlyPlayed.module.scss";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";
import SongsCard from "../../common/SongsCard/SongsCard";

const RecentlyPlayed = () => {
  return (
    <div className={styles.recentlyPlayedContainer}>
      <SongsHeaderShowAll title={"Recently played"} />
      <div className={styles.recentlyPlayedCardContainer}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <SongsCard />;
        })}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
