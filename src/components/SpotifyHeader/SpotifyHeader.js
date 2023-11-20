import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import React from "react";
import styles from "./SpotifyHeader.module.scss";

const SpotifyHeader = () => {
  return (
    <div className={styles.spotifyHeader}>
      <div className={styles.leftRightArrow}>
        <div className={styles.leftArrowContainer}>
          <ChevronLeftRoundedIcon />
        </div>
        <div className={styles.leftArrowContainer}>
          <ChevronRightRoundedIcon />
        </div>
      </div>

      <div className={styles.sidebarRightZone}>
        <div className={styles.premium}>Explore Premium</div>
        <div className={styles.install}>Install App</div>
        <div className={styles.notificationAndUser}>
          <NotificationsNoneRoundedIcon />
        </div>
        <div className={styles.notificationAndUser}>
          <Person2OutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default SpotifyHeader;
