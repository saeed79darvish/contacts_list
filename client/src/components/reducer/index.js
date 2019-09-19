import { combineReducers } from "redux";
import ContactsReducer from "./contactReducer";
import AuthReducer from "./authReducer";
import AlertReducer from "./alertReducer";

export default combineReducers({
  contacts: ContactsReducer,
  authentication: AuthReducer,
  alerts: AlertReducer
});
