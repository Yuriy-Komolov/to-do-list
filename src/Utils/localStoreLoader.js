export const initializeState = () => {
  localStorage.setItem("userState", {});
};

export const loadState = () => {
  const serializedState = localStorage.getItem("userState");

  if (serializedState === null) {
    return initializeState();
  }

  return JSON.parse(serializedState);
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("userState", serializedState);
};
