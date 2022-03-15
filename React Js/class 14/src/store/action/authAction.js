import ActionTypes from "../constants";

const loginAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.USER_LOGIN,
      payload: data,
    });
  };
};

const logoutAction = () => {
  return (dispatch) => {
    console.log("hello logout");
    dispatch({
      type: ActionTypes.USER_LOGOUT,
    });
  };
};
export { loginAction, logoutAction };
