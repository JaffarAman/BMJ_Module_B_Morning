import axios from "axios";
import BASE_URI from "../../core";
import ActionTypes from "../constants";

const LoginAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.USER_LOGIN_REQ,
    });

    axios
      .post(`${BASE_URI}login`, data)
      .then((res) => {
        if (res.data.error) {
          console.log(res, "action error");

          dispatch({
            type: ActionTypes.USER_LOGIN_FAIL,
            payload: res.data,
          });
        } else {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          dispatch({
            type: ActionTypes.USER_LOGIN_SUCCESS,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.USER_LOGIN_FAIL,
          payload: err.data,
        });
      });
  };
};

// const getUser = () => {
//   return (dispatch) => {
//     dispatch({
//       type: ActionTypes.USER_LOGIN_REQ,
//     });

//     axios
//       .post(`${BASE_URI}login`, data)
//       .then((res) => {
//         if (res.data.error) {
//           console.log(res, "action error");

//           dispatch({
//             type: ActionTypes.USER_LOGIN_FAIL,
//             payload: res.data,
//           });
//         } else {
//           localStorage.setItem("user", JSON.stringify(res.data.data));
//           dispatch({
//             type: ActionTypes.USER_LOGIN_SUCCESS,
//             payload: res.data,
//           });
//         }
//       })
//       .catch((err) => {
//         dispatch({
//           type: ActionTypes.USER_LOGIN_FAIL,
//           payload: err.data,
//         });
//       });
//   };
// };

export { LoginAction };
