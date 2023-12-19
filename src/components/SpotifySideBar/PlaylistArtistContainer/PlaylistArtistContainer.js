import React, { useState } from "react";
import ArtistPlaylistPopover from "../ArtistPlaylistPopover/ArtistPlaylistPopover";
import Search from "./../../../assets/images/search.svg";
import GridViewIcon from "@mui/icons-material/GridView";
import styles from "./PlaylistArtistContainer.module.scss";
import ArtistPlaylistList from "../ArtistPlaylistList/ArtistPlaylistList";

const PlaylistArtistContainer = () => {
  const [sortByText, setSortByText] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;
  return (
    <div className={styles.playlistArtistContainer}>
      <div className={styles.playlistArtistChip}>
        <div className={styles.playlistArtists}>Playlists</div>
        <div className={styles.playlistArtists}>Artists</div>
      </div>
      <div className={styles.searchFilterContainer}>
        <div className={styles.searchArtist}>
          <img src={Search} alt="Search" />
        </div>
        <div className={styles.contentFilter} onClick={handleClick}>
          <div className={styles.content}>{sortByText}</div>
          <GridViewIcon />
        </div>

        {/* Popover Component for Artist and Playlist */}
        <ArtistPlaylistPopover
          id={id}
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
          setSortByText={setSortByText}
        />
      </div>
      <ArtistPlaylistList />
    </div>
  );
};

export default PlaylistArtistContainer;
