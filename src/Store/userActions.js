import { actions } from "./userReduser";

export const setCurrentUser = (user) => ({
  type: actions.SET_CURRENT_USER,
  payload: user,
});
