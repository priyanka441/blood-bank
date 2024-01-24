import { configureStore } from "@reduxjs/toolkit"; //store ko create krte h
import authSlice from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;