//Change according to your requirements

import { createSlice } from "@reduxjs/toolkit";
import DummyImage from "../../assets/images/spotifySongDummy.svg";
import DummyImage1 from "../../assets/images/dummySong1.svg";
import DummyImage2 from "../../assets/images/dummySong2.svg";

const initialState = [
  {
    title: "Daily Mix 1",
    songImage: DummyImage,
  },
  {
    title: "Daily Mix 2",
    songImage: DummyImage1,
  },
  {
    title: "Daily Mix 3",
    songImage: DummyImage2,
  },
];

const recentlyPlayedSongSlice = createSlice({
  name: "recentlyPlayedSongs",
  initialState,
  reducers: {
    addRecentlySongs(state, action) {},
  },
});

export default recentlyPlayedSongSlice.reducer;
export const recentlyPlayedSongActions = recentlyPlayedSongSlice.actions;
