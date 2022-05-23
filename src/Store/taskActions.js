import { actions } from "./taskReduser";

export const refreshListAction = (list, sourceIndex, destinationIndex) => ({
  type: actions.REFRESH_LIST,
  payload: (() => {
    const result = list.slice();
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    return result;
  })(),
});

export const removeTaskAction = (list, task) => ({
  type: actions.REMOVE_TASK,
  payload: list.filter((p) => p.id !== task.id),
});
