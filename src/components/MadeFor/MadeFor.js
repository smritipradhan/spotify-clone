import React from "react";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";
import styles from "./MadeFor.module.scss";

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

const MadeFor = () => {
  return (
    <div className={styles.madeFor}>
      <SongsHeaderShowAll title={"Made for Smriti Pradhan"} />
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

export default MadeFor;
