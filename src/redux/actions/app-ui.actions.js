import actionTypes from "./types";

export const initLaunch = () => ({ type: "INIT_LAUNCH" });
export const clearData = (prop, value) => ({
  type: actionTypes.refreshData,
  payload: { prop, value },
});
