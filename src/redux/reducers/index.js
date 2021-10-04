import { combineReducers } from "redux";
import appUiReducers from "./app-ui.reducers";
import ordersReducers from "./orders.reducers";
import userReducers from "./user.reducers";
import utilsReducers from "./utils.reducers";

export default combineReducers({
  Orders: ordersReducers,
  User: userReducers,
  Utils: utilsReducers,
  UI: appUiReducers,
});
