import { combineReducers } from "redux";
import { LoginReducer } from "./authReducers";

const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;
