import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import recentlyPlayedSongReducer from "./slices/recentlyPlayedSongsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    recentlyPlayedSong: recentlyPlayedSongReducer,
  },
});

export default store;

//const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);  useSelector
// const handleLogin = () => {
//     dispatch(authActions.login()); dispatch
//   };
