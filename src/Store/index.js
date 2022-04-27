import { composeWithDevTools } from "redux-devtools-extension";
import { taskReducer } from "./taskReduser";
import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/userSlice";

const { createStore, combineReducers } = require("redux");

// const rootReducer = combineReducers({
//   userReduser,
//   taskReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    user: userReduser,
    tasks: taskReducer,
  },
});

export default store;
