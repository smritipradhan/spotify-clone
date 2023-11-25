import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import ArtistDropdownFilter from "../ArtistDropdownFilter/ArtistDropdownFilter";
import styles from "./ArtistPlaylistPopover.module.scss";

const ArtistPlaylistPopover = ({ id, anchorEl, handleClose, open }) => {
  const [sortByList, setSortByList] = useState([
    {
      listName: "Recents",
      isSelected: false,
    },
    {
      listName: "Recently Added ",
      isSelected: false,
    },
    {
      listName: "Alphabetical",
      isSelected: false,
    },
    {
      listName: "Creator",
      isSelected: true,
    },
  ]);
  const [viewAsList, setViewAsList] = useState([
    {
      listName: "Compact",
      isSelected: false,
    },
    {
      listName: "List",
      isSelected: false,
    },
    {
      listName: "Grid",
      isSelected: true,
    },
  ]);

  const handleSortByListChange = (event, index) => {
    const selectedSortBy = sortByList.findIndex((item) => item.isSelected);
    if (selectedSortBy === index) {
      //do nothing
    } else {
      const updatedSortBy = [...sortByList];
      updatedSortBy[index].isSelected = true;
      updatedSortBy[selectedSortBy].isSelected = false;
      setSortByList(updatedSortBy);
    }
  };

  const handleViewAsListChange = (event, index) => {
    const viewAs = viewAsList.findIndex((item) => item.isSelected);
    if (viewAs === index) {
      //do nothing
    } else {
      const updatedView = [...viewAsList];
      updatedView[index].isSelected = true;
      updatedView[viewAs].isSelected = false;
      setViewAsList(updatedView);
    }
  };
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#282828",
          top: "300px !important",
          width: "170px",
          left: "155px !important",
          padding: "5px",
        },
        "& .css-17ffvgn-MuiTypography-root": {
          padding: "0px",
        },
      }}
    >
      <ArtistDropdownFilter
        title="Sort by"
        list={sortByList}
        handleChange={handleSortByListChange}
      />
      <Divider className={styles.divider} />
      <ArtistDropdownFilter
        title="View as"
        list={viewAsList}
        handleChange={handleViewAsListChange}
      />
    </Popover>
  );
};

export default ArtistPlaylistPopover;
