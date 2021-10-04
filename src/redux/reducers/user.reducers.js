import actionTypes from "../actions/types";
const initialState = {
  isAuthenticating: false,
  currentUser: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuthenticating: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticating: false,
        currentUser: action.payload,
        error: null,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isAuthenticating: false,
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
