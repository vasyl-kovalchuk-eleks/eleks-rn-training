import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import nav from "./nav";
import auth from "./auth";
import topics from "./topics";

const AppReducer = combineReducers({
  nav,
  auth,
  topics,
  form: formReducer
});

export default AppReducer;
