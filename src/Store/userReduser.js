export const actions = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

export const userReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    default:
      return state;
  }
};
