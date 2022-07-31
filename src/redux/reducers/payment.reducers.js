import actionTypes from "../actions/types";
const initialState = {
  paySuccess: false,
  paying: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.payInit:
      return {
        ...state,
        paying: true,
        error: null,
      };
    case actionTypes.paySuccess:
      return {
        ...state,
        paying: false,
        paySuccess: true,
        error: null,
      };
    case actionTypes.payFail:
      return {
        ...state,
        paying: false,
        payingSuccess: false,
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
