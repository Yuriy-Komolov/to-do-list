import { actions } from "./taskReduser";

export const refreshListAction = (sourceIndex, destinationIndex) => {
  return (dispatch) => {
    dispatch({
      type: actions.REFRESH_LIST,
      payload: { sourceIndex, destinationIndex },
    });
  };
};

export const removeTaskAction = (list, task) => {
  return (dispatch) => {
    dispatch({
      type: actions.REMOVE_TASK,
      payload: list.filter((p) => p.id !== task.id),
    });
  };
};
