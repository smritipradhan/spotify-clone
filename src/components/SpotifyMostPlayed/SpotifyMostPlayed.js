import React from "react";
import LikedSong from "./../../assets/images/likedSong.svg";
import Song2 from "./../../assets/images/song2.svg";
import styles from "./SpotifyMostPlayed.module.scss";

const mostPlayed = [
  {
    icon: LikedSong,
    name: "Hot Hits Hindi",
  },
  {
    name: "Best of Coke Studio",
    icon: Song2,
  },
  {
    name: "Sanjith Hegde",
    icon: LikedSong,
  },
  {
    name: "New Music Friday India",
    icon: Song2,
  },
  {
    name: "Hot Hits Hindi",
    icon: LikedSong,
  },
  {
    name: "Hot Hits Hindi",
    icon: Song2,
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
              <div className={styles.mostPlayedCardImage}>
                <img src={recentlyPlayedSong?.icon} />
              </div>
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
