import React from "react";
import styles from "./SideBar.module.scss";
import SideBarNavigation from "../SideBarNavigation/SideBarNavigation";
import libraryIcon from "../../../assets/images/library.svg";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarNavigation />
      <div className={styles.sideBarLibrary}>
        <div className={styles.navigationItemContainer}>
          <div className={styles.library}>
            <div className={styles.navigationIcon}>
              <img src={libraryIcon} />
            </div>
            <div className={styles.navigationName}>Your Library</div>
          </div>
          <div className={styles.addForward}>
            <AddRoundedIcon className={styles.addforwar} />
            <ArrowForwardRoundedIcon className={styles.addforwar} />
          </div>
        </div>
      </div>
      <div className={styles.playlistArtistContainer}>
        <div className={styles.playlistArtistChip}>
          <div className={styles.playlistArtists}>Playlists</div>
          <div className={styles.playlistArtists}>Artists</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
