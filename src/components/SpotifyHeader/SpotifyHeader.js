import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import React from "react";
import styles from "./SpotifyHeader.module.scss";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import ArtistDropdownFilter from "../SpotifySideBar/ArtistDropdownFilter/ArtistDropdownFilter";

const SpotifyHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [userAccountActionList, setUserAccountActionList] = useState([
    {
      listName: "Account",
    },
    {
      listName: "Profile",
    },
    {
      listName: "Upgrade to Premium",
    },
    {
      listName: "Settings",
    },
    {
      listName: "Logout",
    },
  ]);

  const handleSortByListChange = (event, index) => {};
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
        <div
          className={styles.notificationAndUser}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
          role="button"
        >
          <Person2OutlinedIcon />
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#282828",
              top: "80px !important",
              width: "170px",
              padding: "5px",
            },
            "& .css-17ffvgn-MuiTypography-root": {
              padding: "0px",
            },
          }}
        >
          <ArtistDropdownFilter
            title=""
            list={userAccountActionList}
            handleChange={handleSortByListChange}
          />
        </Popover>
      </div>
    </div>
  );
};

export default SpotifyHeader;
