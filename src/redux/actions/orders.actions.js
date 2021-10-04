import axios from "axios";
import { testUrl } from "../../utils/helpers";

export const getOrders = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_ORDERS" });
    const { currentUser } = getState().User;
    var config = {
      method: "get",
      url: `${testUrl}/user/pointofsale/my-orders`,
      headers: {
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    };

    axios(config)
      .then((res) => {
        dispatch({ type: "GET_ORDERS_SUCCESS", payload: res.data.results });
        console.log(res);
      })
      .catch((error) => dispatch({ type: "GET_ORDERS_FAIL", payload: error }));
  };
};

export const getOrderDetails = (reference) => {
  return (dispatch, getState) => {
    const { currentUser } = getState().User;

    dispatch({ type: "GET_ORDER_DETAILS" });

    var config = {
      method: "get",
      url: `${testUrl}/user/pos/orders/${reference}`,
      headers: {
        Authorization: `Bearer ${currentUser.accessToken}`,
      },
    };

    axios(config)
      .then((res) => {
        dispatch({
          type: "GET_ORDER_DETAILS_SUCCESS",
          payload: res.data.result,
        });
        console.log(res);
      })
      .catch((error) =>
        dispatch({ type: "GET_ORDER_DETAILS_FAIL", payload: error })
      );
  };
};
