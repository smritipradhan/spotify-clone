import React from "react";
import styles from "./SongsHeaderShowAll.module.scss";

const SongsHeaderShowAll = ({ title, url }) => {
  return (
    <div className={styles.recentlyPlayedHeader}>
      <div className={styles.recentlyPlayedText}>{title}</div>
      <div className={styles.showMore}>Show all</div>
    </div>
  );
};

export default SongsHeaderShowAll;
