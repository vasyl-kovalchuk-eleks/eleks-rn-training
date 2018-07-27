import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware as navigationMiddleware } from './src/navigators';

const middlewares = [
  thunk,
  navigationMiddleware,
];

if (__DEV__) {
  console.ignoredYellowBox = ['Setting a timer'];
  // eslint-disable-next-line
  const logger = createLogger({
    duration: true,
    collapsed: true,
  });
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  AppReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const App = () => (<Provider store={store}>
  <AppNavigator/>
</Provider>);

export default App;
