import { combineReducers } from "redux";
import appUiReducers from "./app-ui.reducers";
import utilsReducers from "./utils.reducers";
import paymentReducers from "./payment.reducers";
import meterReducers from "./meter.reducers";

export default combineReducers({
  Utils: utilsReducers,
  UI: appUiReducers,
  Pay: paymentReducers,
  Meter: meterReducers,
});
