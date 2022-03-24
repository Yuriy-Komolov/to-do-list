const defaultState = [
  {
    id: 1,
    title: "111 Take dog for a walk",
    description: "after super",
  },
  {
    id: 2,
    title: "2222 title som tesdcsadsadt 2",
    description: "description number 2",
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
    default:
      return state;
  }
};
