import React from "react";
import Home from "./../../../assets/images/home.svg";
import Search from "./../../../assets/images/search.svg";
import styles from "./SideBarNavigation.module.scss";
import { Link } from "react-router-dom";

const navigation = [
  {
    icon: Home,
    name: "Home",
    link: "/",
  },
  {
    icon: Search,
    name: "Search",
    link: "/search",
  },
];

const SideBarNavigation = () => {
  return (
    <div className={styles.sideBarNavigation}>
      {Array.isArray(navigation) &&
        navigation?.length &&
        navigation.map((navigationItem, index) => {
          return (
            <Link to={navigationItem.link}>
              <div key={index} className={styles.navigationItemContainer}>
                <div className={styles.navigationIcon}>
                  <img src={navigationItem?.icon} alt={navigationItem?.name} />
                </div>
                <div className={styles.navigationName}>
                  {navigationItem?.name}
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SideBarNavigation;
