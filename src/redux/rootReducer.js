import { combineReducers } from "redux";
import userReducer from "./Authentications/authReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
