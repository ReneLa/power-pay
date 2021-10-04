const initialState = {
  initLaunch: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INIT_LAUNCH":
      return {
        ...state,
        initLaunch: false,
      };

    default:
      return state;
  }
};
