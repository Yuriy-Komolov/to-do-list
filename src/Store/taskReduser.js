export const actions = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  REFRESH_LIST: "REFRESH_TASK",
  ADD_SUBTASK: "ADD_SUBTASK",
  SET_SORTING_METHOD: "SET_SORTING_METHOD",
  SET_SORTING_ORDER: "SET_SORTING_ORDER",
};

const defaultState = {
  taskList: [],
  sortBy: { method: "Default", order: "descending" },
};

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_TASK: {
      return { ...state, taskList: [...state.taskList, action.payload] };
    }
    case actions.REFRESH_LIST: {
      return {
        ...state,
        taskList: [...action.payload],
      };
    }
    case actions.REMOVE_TASK: {
      return { ...state, taskList: [...action.payload] };
    }
    case actions.ADD_SUBTASK: {
      return [...state, action.payload];
    }
    case actions.SET_SORTING_METHOD: {
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          method: action.payload,
        },
      };
    }
    case actions.SET_SORTING_ORDER: {
      return {
        ...state,
        sortBy: {
          ...state.sortBy,
          order: action.payload,
        },
      };
    }
    default:
      return state;
  }
};
