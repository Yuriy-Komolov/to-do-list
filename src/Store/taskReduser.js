export const actions = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  REFRESH_LIST: "REFRESH_TASK",
  ADD_SUBTASK: "ADD_SUBTASK",
};

const defaultState = {
  taskList: [],
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
    default:
      return state;
  }
};
