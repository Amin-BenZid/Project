import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    userLogin: { email: "", password: "", loggedIn: "" },
  },
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});
export const { login } = registerSlice.actions;
export const selectRegister = (state) => state.register.register;
export default registerSlice.reducer;
