import React from "react";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";
import styles from "./MadeFor.module.scss";
import SongsCard from "../../common/SongsCard/SongsCard";

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
          return <SongsCard />;
        })}
      </div>
    </div>
  );
};

export default MadeFor;
