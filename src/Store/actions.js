import { actions } from "./actionTypes";

export function moveItemAction(sourceIndex, destinationIndex) {
  return (dispatch) => {
    dispatch({
      type: actions.refresh,
      payload: { sourceIndex, destinationIndex },
    });
  };
}
