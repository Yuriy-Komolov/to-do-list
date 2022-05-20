export const actions = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  REFRESH_LIST: "REFRESH_TASK",
  ARR_SUBTASK: "ADD_SUBTASK",
};

const defaultState = [];

export const taskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.ADD_TASK: {
      return [...state, action.payload];
    }
    case actions.REFRESH_LIST: {
      return [
        ...(state = listReorder(
          state,
          action.payload.sourceIndex,
          action.payload.destinationIndex
        )),
      ];
    }
    case actions.REMOVE_TASK: {
      return [...action.payload];
    }
    case actions.ARR_SUBTASK: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

const listReorder = (list, startIndex, endIndex) => {
  const result = list.slice();
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
