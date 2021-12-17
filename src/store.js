import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./redux/userRegister/registerSlice";
import postReducer from "./redux/userRegister/postSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    postReducer: postReducer,
  },
});
