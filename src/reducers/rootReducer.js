import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import {saidbarReducer} from "./saidbarReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  param:saidbarReducer
});
