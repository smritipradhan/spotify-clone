import React from "react";
import styles from "./ArtistPlaylistList.module.scss";
import ArtistPlaylistCard from "../../../common/ArtistPlaylistCard/ArtistPlaylistCard";

const ArtistPlaylistList = () => {
  const artistPlaylistData = [
    {
      title: "Anuv Jain",
      details: "Artist",
    },
    {
      title: "Arijit Singh",
      details: "Artist",
    },
    {
      title: "My Recommended Playlist",
      details: "Playlist",
    },
  ];

  return (
    <div className={styles.artistPlaylistContainer}>
      {Array.isArray(artistPlaylistData) &&
        artistPlaylistData?.slice(0, 3).map((data) => {
          return (
            <ArtistPlaylistCard name={data?.title} details={data?.details} />
          );
        })}
    </div>
  );
};

export default ArtistPlaylistList;
