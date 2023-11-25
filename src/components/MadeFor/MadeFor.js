import React from "react";
import SongsHeaderShowAll from "../../common/SongsHeaderShowAll/SongsHeaderShowAll";
import styles from "./MadeFor.module.scss";
import SongsCard from "../../common/SongsCard/SongsCard";
import DummyImage from "../../assets/images/spotifySongDummy.svg";
import DummyImage3 from "../../assets/images/dummySong3.svg";
import DummyImage4 from "../../assets/images/dummySong4.svg";
import DummyImage5 from "../../assets/images/dummySong5.svg";

const madeForList = [
  {
    title: "Daily Mix 1",
    songImage: DummyImage3,
  },
  {
    title: "Daily Mix 2",
    songImage: DummyImage4,
  },
  {
    title: "Daily Mix 3",
    songImage: DummyImage5,
  },
  {
    title: "Daily Mix 3",
    songImage: DummyImage,
  },
];

const MadeFor = () => {
  return (
    <div className={styles.madeFor}>
      <SongsHeaderShowAll title={"Made for Smriti Pradhan"} />
      <div className={styles.recentlyPlayedCardContainer}>
        {madeForList.map((item, index) => {
          return <SongsCard title={item?.title} songImage={item?.songImage} />;
        })}
      </div>
    </div>
  );
};

export default MadeFor;
