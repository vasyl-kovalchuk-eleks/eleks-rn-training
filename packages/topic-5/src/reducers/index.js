import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import nav from "./nav";
import auth from "./auth";

const AppReducer = combineReducers({
  nav,
  auth,
  form: formReducer
});

export default AppReducer;
