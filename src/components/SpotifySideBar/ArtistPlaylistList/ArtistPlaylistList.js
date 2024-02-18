import React from "react";
import styles from "./ArtistPlaylistList.module.scss";
import ArtistPlaylistCard from "../../../common/ArtistPlaylistCard/ArtistPlaylistCard";
import { Link } from "react-router-dom";
import AnuvJain from "../../../assets/images/anuvjain.jpg";

const ArtistPlaylistList = () => {
  const artistPlaylistData = [
    {
      title: "Anuv Jain",
      details: "Artist",
      background: AnuvJain,
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
            <Link
              to={data.details === "Artist" ? "/artist/abc" : "/playlist/abc"}
            >
              <ArtistPlaylistCard data={data} />
            </Link>
          );
        })}
    </div>
  );
};

export default ArtistPlaylistList;
