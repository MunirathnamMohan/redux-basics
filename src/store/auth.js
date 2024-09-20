import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthunticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthunticated = true;
    },
    logout(state) {
      state.isAuthunticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
