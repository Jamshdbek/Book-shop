import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
});
