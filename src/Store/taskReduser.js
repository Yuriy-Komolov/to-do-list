import { actions } from "./actionTypes";
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

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.addTask: {
      return [...state, action.payload];
    }
    case "REFRESH_TASK": {
      if (defaultState.length !== 0) {
        return [
          ...(state = reorder(
            state,
            action.payload.sourceIndex,
            action.payload.destinationIndex
          )),
        ];
      }
      return state;
    }
    case action.removeTask: {
      return [...action.payload];
    }
    case "ADD_SUBTASK": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
