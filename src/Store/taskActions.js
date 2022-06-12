import { actions } from "./taskReduser";

export const dragAndDropAction = (list, sourceIndex, destinationIndex) => ({
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

export const setSortingMethod = (sortingMethod) => ({
  type: actions.SET_SORTING_METHOD,
  payload: sortingMethod,
});

export const setSortingOrder = (sortingOrder) => ({
  type: actions.SET_SORTING_ORDER,
  payload: sortingOrder,
});

export const setTaskPriority = (task, priorityInfo) => ({
  type: actions.SET_PRIORITY,
  payload: { task, priorityInfo },
});
