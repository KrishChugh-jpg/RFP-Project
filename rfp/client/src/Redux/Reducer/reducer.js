import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { appReducer } from "./appReducer";

console.log(userReducer);
export const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});
