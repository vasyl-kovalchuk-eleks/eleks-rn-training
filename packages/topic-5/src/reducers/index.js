import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import nav from "./nav";
import auth from "./auth";
import topics from "./topics";
import notifications from "./notifications";

const AppReducer = combineReducers({
  nav,
  auth,
  topics,
  notifications,
  form: formReducer
});

export default AppReducer;
