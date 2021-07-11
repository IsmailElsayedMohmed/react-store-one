import { combineReducers } from "redux";
import initalWithAuthRecuer from "./index";
import CheckProdcut from "./CheckProdcut";
export default combineReducers({
  inital: initalWithAuthRecuer,
  Check: CheckProdcut,
});
