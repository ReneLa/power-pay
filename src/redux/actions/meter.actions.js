import axios from "axios";
import { testUrl } from "../../utils/helpers";

export const get_pivot_info = (meter) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET PIVOT INFO" });

    var data = new FormData();
    data.append("meter", meter);

    var config = {
      method: "get",
      url: `https://powerup-thesis.herokuapp.com/api/pivot?meter=${meter}`,
    };

    axios(config)
      .then((res) => {
        const { Pivot } = res.data;
        dispatch({ type: "GET PIVOT INFO SUCCESS", payload: Pivot });
        console.log(res);
      })
      .catch((error) =>
        dispatch({ type: "GET PIVOT INFO ERROR", payload: error })
      );
  };
};

export const get_account_info = (phone) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET ACCOUNT INFO" });

    var data = new FormData();
    data.append("meter", meter);

    var config = {
      method: "get",
      url: `https://powerup-thesis.herokuapp.com/api/account?phone=${phone}`,
    };

    axios(config)
      .then((res) => {
        const { Account } = res.data;
        dispatch({ type: "GET ACCOUNT INFO SUCCESS", payload: Account });
        console.log(res);
      })
      .catch((error) =>
        dispatch({ type: "GET ACCOUNT INFO ERROR", payload: error })
      );
  };
};

export const get_tranx_history = (meter) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET METER HISTORY" });

    var config = {
      method: "get",
      url: `https://powerup-thesis.herokuapp.com/api/topup?meter=${meter}`,
    };

    axios(config)
      .then((res) => {
        const { Topup } = res.data;
        dispatch({ type: "GET METER HISTORY SUCCESS", payload: Topup });
        // console.log(res);
      })
      .catch((error) =>
        dispatch({ type: "GET METER HISTORY ERROR", payload: error })
      );
  };
};
