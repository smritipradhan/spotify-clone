import React from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import styles from "./ArtistDropdownFilter.module.scss";

const ArtistDropdownFilter = (props) => {
  const { title, list, handleChange } = props;

  return (
    <div className={styles.filterDropdownSecond}>
      <div className={styles.dropdownHeader}>{title}</div>
      <div className={styles.listContainer}>
        {Array.isArray(list) &&
          list.length &&
          list.map((listItem, index) => {
            return (
              <div
                className={styles.listItem}
                onClick={(e) => handleChange(e, index)}
              >
                <div
                  className={
                    listItem.isSelected
                      ? styles.listNameChecked
                      : styles.listName
                  }
                >
                  {listItem?.listName}
                </div>
                {listItem.isSelected && (
                  <div className={styles.check}>
                    <CheckRoundedIcon />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ArtistDropdownFilter;
