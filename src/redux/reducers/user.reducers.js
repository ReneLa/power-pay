import actionTypes from "../actions/types";
const initialState = {
  isAuthenticating: false,
  currentUser: null,
  error: null,
  verifying: false,
  meterInfo: null,
  savedMeters: [
    { name: "Dorcas Meyers", pivot: "23421492813321" },
    { name: "Jack Golbert", pivot: "0103000753842" },
  ],
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
    case "VERIFY":
      return {
        verifying: true,
      };
    case "VERIFY_SUCCESS":
      return {
        verifying: false,
        meterInfo: action.payload,
      };
    case "VERIFY_FAIL":
      return {
        verifying: false,
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
