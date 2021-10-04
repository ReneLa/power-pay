import axios from "axios";
import { testUrl } from "../../utils/helpers";
import { onSignIn } from "../../utils/auth";
import { clearData } from "./app-ui.actions";

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_USER" });
    var data = new FormData();

    data.append("username", user.name);
    data.append("password", user.password);

    var config = {
      method: "post",
      url: `${testUrl}/auth/login`,
      data,
    };

    axios(config)
      .then((res) => {
        const { data } = res;

        dispatch({ type: "LOGIN_SUCCESS", payload: data });

        // console.log(res);
        onSignIn(data);
      })
      .catch((error) => dispatch({ type: "LOGIN_FAIL", payload: error }));
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOG_OUT" });
    dispatch(clearData("currentUser", null));
    var config = {
      method: "delete",
      url: `${testUrl}/auth/logout`,
    };

    axios(config)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
};
