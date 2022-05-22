import ActionTypes from "../constants";

const INITIAL_STATE = {
  userData: undefined,
  userDataLoading: false,
  userDataError: "",
  userDataMessage: "",
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_REQ:
      return {
        ...state,
        userDataLoading: true,
      };

    case ActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        userDataLoading: false,
        userData: action.payload.data,
        userDataMessage: action.payload.message,
      };
    case ActionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        userDataLoading: false,
        userDataError: action.payload.error,
      };
    default:
      return state;
  }
};

export { LoginReducer };
