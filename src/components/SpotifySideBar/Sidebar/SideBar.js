import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import GridViewIcon from "@mui/icons-material/GridView";
import React from "react";
import libraryIcon from "../../../assets/images/library.svg";
import SideBarNavigation from "../SideBarNavigation/SideBarNavigation";
import Search from "./../../../assets/images/search.svg";
import styles from "./SideBar.module.scss";
import ArtistPlaylistPopover from "../ArtistPlaylistPopover/ArtistPlaylistPopover";

const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <div className={styles.playlistArtistContainer}>
          <div className={styles.playlistArtistChip}>
            <div className={styles.playlistArtists}>Playlists</div>
            <div className={styles.playlistArtists}>Artists</div>
          </div>
          <div className={styles.searchFilterContainer}>
            <div className={styles.searchArtist}>
              <img src={Search} />
            </div>
            <div className={styles.contentFilter} onClick={handleClick}>
              <div className={styles.content}>Creator</div>
              <GridViewIcon />
            </div>

            {/* Popover Component for Artist and Playlist */}
            <ArtistPlaylistPopover
              id={id}
              anchorEl={anchorEl}
              handleClose={handleClose}
              open={open}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
