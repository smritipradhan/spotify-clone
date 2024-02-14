import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  isSnackbarOpen: false,
  message: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.isAuthenticated = action.payload;
    },
    openSnackbar(state, action) {
      state.isSnackbarOpen = true;
      state.message = action.payload;
    },
    closeSnackbar(state) {
      state.isSnackbarOpen = false;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
