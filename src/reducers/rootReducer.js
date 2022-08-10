import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { cartReducter } from "./cartReducer";
import {saidbarReducer} from "./saidbarReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  param:saidbarReducer,
   cart: cartReducter
});
