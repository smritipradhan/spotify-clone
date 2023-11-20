import React from "react";
import styles from "./SideBar.module.scss";
import SideBarNavigation from "../SideBarNavigation/SideBarNavigation";
import libraryIcon from "../../../assets/images/library.svg";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <SideBarNavigation />
      <div className={styles.sideBarLibrary}>
        <div className={styles.navigationItemContainer}>
          <div className={styles.navigationIcon}>
            <img src={libraryIcon} />
          </div>
          <div className={styles.navigationName}>Your Library</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
