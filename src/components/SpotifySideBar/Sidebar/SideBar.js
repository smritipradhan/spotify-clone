import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlaylistArtistContainer from "../PlaylistArtistContainer/PlaylistArtistContainer";
import React from "react";
import libraryIcon from "../../../assets/images/library.svg";
import SideBarNavigation from "../SideBarNavigation/SideBarNavigation";

import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarNavigation />
      <div className={styles.libraryPlaylistContainer}>
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
        <PlaylistArtistContainer />
      </div>
    </div>
  );
};

export default SideBar;
