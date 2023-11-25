import React from "react";
import { useSelector } from "react-redux";
import SongsCard from "../../common/SongsCard/SongsCard";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";
import styles from "./RecentlyPlayed.module.scss";

const RecentlyPlayed = () => {
  const recentlyPlayedSongs = useSelector((state) => state.recentlyPlayedSong);

  return (
    <div className={styles.recentlyPlayedContainer}>
      <SongsHeaderShowAll title={"Recently played"} />
      <div className={styles.recentlyPlayedCardContainer}>
        {recentlyPlayedSongs.map((item, index) => {
          return <SongsCard title={item?.title} songImage={item?.songImage} />;
        })}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
