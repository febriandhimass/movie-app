import { combineReducers } from "redux";

import { movieReducer as movies } from "./movies/reducer";

export default combineReducers({
  movies
});
