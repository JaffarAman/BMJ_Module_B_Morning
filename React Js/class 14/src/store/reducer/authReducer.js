import ActionTypes from "../constants";

const INITIAL_STATE = {
  userEmail: "",
  userPassword: "",
};

const loginReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ActionTypes.USER_LOGIN) {
    return {
      ...state,
      userEmail: action.payload.email,
      userPassword: action.payload.password,
    };
  } else if (action.type === ActionTypes.USER_LOGOUT) {
    return {
      ...state,
      userEmail: "",
      userPassword: "",
    };
  } else {
    return state;
  }
};

// const logoutReducer = (state = INITIAL_STATE, action) => {
// switch (action.type) {
//     case ActionTypes.USER_LOGOUT:
//       console.log(action.type);
//       return {
//         ...state,
//         userEmail: "",
//         userPassword: "",
//       };
//     default:
//       return state;
//   }
// };

export { loginReducer };
