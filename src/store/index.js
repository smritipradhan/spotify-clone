import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recentlyPlayedSongReducer from "./slices/recentlyPlayedSongsSlice";
import songReducer from "./slices/songsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    recentlyPlayedSong: recentlyPlayedSongReducer,
    song: songReducer,
  },
});

export default store;
