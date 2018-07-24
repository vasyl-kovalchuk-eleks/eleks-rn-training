import { combineReducers } from 'redux';
import nav from "./nav";
import auth from "./auth";

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;
