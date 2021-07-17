import { combineReducers } from "redux";
import layoutReducer from "./Layout/layoutReducer";

const rootReducer = combineReducers({
  layout: layoutReducer,
});
export default rootReducer;
