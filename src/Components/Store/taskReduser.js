const defaultState = [
  {
    id: 1,
    title: "111 Take dog for a walk",
    description: "after super",
    subtasks: [
      { id: 1, title: "111 Take dog for a walk", description: "after super" },
      {
        id: 2,
        title: "2222 title som tesdcsadsadt 2",
        description: "description number 2",
      },
      {
        id: 3,
        title: "5555 title som tesdcsadsadt 33",
        description: "description number 2",
      },
    ],
  },
  {
    id: 2,
    title: "2222 title som tesdcsadsadt 2",
    description: "description number 2",
    subtasks: [
      {
        id: 2,
        title: "2222 title som tesdcsadsadt 2",
        description: "description number 2",
      },
    ],
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
