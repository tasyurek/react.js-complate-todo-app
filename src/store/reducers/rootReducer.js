import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import cardReducer from "./cardReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  projectReducer,
  cardReducer,
  todoReducer
});

export default rootReducer;
