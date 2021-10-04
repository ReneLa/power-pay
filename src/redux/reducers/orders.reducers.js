import actionTypes from "../actions/types";
const initialState = {
  isFetching: false,
  orders: [],
  orderDetails: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        orders: action.payload,
        error: null,
      };
    case "GET_ORDERS_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case "GET_ORDER_DETAILS":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "GET_ORDER_DETAILS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        orderDetails: action.payload,
        error: null,
      };
    case "GET_ORDER_DETAILS_FAIL":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case actionTypes.refreshData:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };

    default:
      return state;
  }
};
