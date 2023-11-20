import React from "react";
import styles from "./SpotifyMostPlayed.module.scss";

const mostPlayed = [
  {
    name: "Hot Hits Hindi",
  },
  {
    name: "Best of Coke Studio",
  },
  {
    name: "Sanjith Hegde",
  },
  {
    name: "New Music Friday India",
  },
  {
    name: "Hot Hits Hindi",
  },
  {
    name: "Hot Hits Hindi",
  },
];

const SpotifyMostPlayed = () => {
  return (
    <div className={styles.mostPlayed}>
      <div className={styles.greetings}>Good evening</div>

      <div className={styles.cardContainer}>
        {mostPlayed.map((recentlyPlayedSong, index) => {
          return (
            <div className={styles.mostPlayedCard} key={index}>
              <div></div>
              <div className={styles.mostPlayedText}>
                {recentlyPlayedSong?.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifyMostPlayed;
