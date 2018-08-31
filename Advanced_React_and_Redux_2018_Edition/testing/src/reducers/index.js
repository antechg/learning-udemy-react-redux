import { combineReducers } from "redux";
import commentsReducers from "./comments";
import authReducers from "./auth";

export default combineReducers({
  comments: commentsReducers,
  auth: authReducers
});
