import { combineReducers } from "redux";
import { getProfileReducer } from "./getProfileReducer";

const rootReducer = combineReducers({
  getProfileReducer,
});

export default rootReducer;
