import { NavigationActions, StackActions } from "react-navigation";

import { FETCH_TOPICS_REQUEST, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAILURE } from "../constants/actionTypes";
import * as databaseService from '../services/database'

export const fetchTopicsRequest = () => ({
  type: FETCH_TOPICS_REQUEST
});
export const fetchTopicsSuccess = (topics) => ({
  type: FETCH_TOPICS_SUCCESS,
  payload: topics
});

export const fetchTopicsFailure = (error) => ({
  type: FETCH_TOPICS_FAILURE,
  payload: error.code
});

export const fetchTopics = () => dispatch => {
 dispatch(fetchTopicsRequest());
  databaseService.fetchTopics().then(topics => {
    dispatch(fetchTopicsSuccess(topics))
  }, error => {
    dispatch(fetchTopicsFailure(error))
  })
};
