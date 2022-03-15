import { combineReducers } from "redux";
import { loginReducer } from "./authReducer";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
  counterReducer,
  loginReducer,
  // logoutReducer,
});

export default rootReducer;
