import { taskReducer } from "./taskReduser";
import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReduser,
    tasks: taskReducer,
  },
  devTools: true,
});

export default store;
