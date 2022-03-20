import axios from "axios";
import ActionTypes from "../constants";

const getProfile = (username) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_GITHUB_PROFILE_LOADING,
    });

    const searchValue = username ? username : "example";

    axios
      .get(`https://api.github.com/users/${searchValue}`)
      .then((res) =>
        dispatch({
          type: ActionTypes.GET_GITHUB_PROFILE,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionTypes.GET_GITHUB_PROFILE_ERROR,
          payload: err.message,
        })
      );
  };
};

export { getProfile };
