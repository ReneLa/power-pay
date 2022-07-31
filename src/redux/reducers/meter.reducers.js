import actionTypes from "../actions/types";
const initialState = {
  pivot: false,
  account: null,
  history: null,
  fetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET PIVOT INFO":
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case "GET PIVOT INFO SUCCESS":
      return {
        ...state,
        fetching: false,
        pivot: action.payload,
        error: null,
      };
    case "GET PIVOT INFO ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case "GET ACCOUNT INFO":
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case "GET ACCOUNT INFO SUCCESS":
      return {
        ...state,
        fetching: false,
        account: action.payload,
        error: null,
      };
    case "GET ACCOUNT INFO ERROR":
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };

    case "GET METER HISTORY":
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case "GET METER HISTORY SUCCESS":
      return {
        ...state,
        fetching: false,
        history: action.payload,
        error: null,
      };
    case "GET METER HISTORY ERROR":
      return {
        ...state,
        fetching: false,
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
