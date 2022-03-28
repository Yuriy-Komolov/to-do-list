const defaultState = [
  {
    id: 1,
    title: "111 Take dog for a walk",
    description: "after super",
    subtasks: [],
  },
  {
    id: 2,
    title: "2222 title som tesdcsadsadt 2",
    description: "description number 2",
    subtasks: [],
  },
];

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    case "REMOVE_TASK": {
      return [...action.payload];
    }
    case "ADD_SUBTASK": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
