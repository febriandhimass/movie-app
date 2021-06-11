export const reducer = (state = null, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.todo;
    default:
      return state;
  }
};
