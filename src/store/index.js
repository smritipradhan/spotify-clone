import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import recentlyPlayedSongReducer from "./slices/recentlyPlayedSongsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recentlyPlayedSong: recentlyPlayedSongReducer,
  },
});

export default store;

//const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  useSelector
// const handleLogin = () => {
//     dispatch(authActions.login()); dispatch
//   };
