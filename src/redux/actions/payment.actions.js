import axios from "axios";
import { testUrl } from "../../utils/helpers";
import actionTypes from "./types";
import { get_pivot_info } from "./meter.actions";

export const top_up = (details) => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.payInit });

    var data = JSON.stringify({
      meter: details.meter,
      phone: details.phone,
      amount: details.amount,
    });

    var config = {
      method: "post",
      url: "https://powerup-thesis.herokuapp.com/api/topup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((res) => {
        const { data, status } = res;
        // if (status === 201) {
        //   dispatch({ type: actionTypes.payFail, payload: data.Message });
        // } else {
        dispatch({ type: actionTypes.paySuccess });
        dispatch(get_pivot_info(details.meter));
        // }
      })
      .catch((error) => {
        const { type } = error;
        // dispatch({ type: actionTypes.payFail, payload: type });
      });
  };
};
