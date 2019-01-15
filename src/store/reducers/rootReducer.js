import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import cardReducer from "./cardReducer";
import todoReducer from "./todoReducer";
import projectFilterReducer from "./projectFilterReducer";

const rootReducer = combineReducers({
  projectReducer,
  cardReducer,
  todoReducer,
  projectFilterReducer
});

export default rootReducer;
