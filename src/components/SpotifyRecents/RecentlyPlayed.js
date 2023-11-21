import React from "react";
import styles from "./RecentlyPlayed.module.scss";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";

const recentlyPlayedCard = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
  {
    name: "D",
  },
  {
    name: "E",
  },
];

const RecentlyPlayed = () => {
  return (
    <div className={styles.recentlyPlayedContainer}>
      <SongsHeaderShowAll title={"Recently played"} />
      <div className={styles.recentlyPlayedCardContainer}>
        {recentlyPlayedCard.map((item, index) => {
          return (
            <div>
              <div className={styles.recentlyPlayedCard}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
