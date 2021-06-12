export const movieReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.todo;
    default:
      return state;
  }
};
