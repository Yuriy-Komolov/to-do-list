import { taskReducer } from "./taskReduser";

const { createStore } = require("redux");

const store = createStore(taskReducer);

export default store;
