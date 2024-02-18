import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  selectedArtist: "Anuv Jain",
  selectedSong: "Husn",
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongs(state, action) {
      state.songs = action.payload;
    },
  },
});

export default songSlice.reducer;
export const songActions = songSlice.actions;
