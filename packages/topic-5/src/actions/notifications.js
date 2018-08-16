import { Alert } from "react-native";

import { MARK_NOTIFICATION_AS_READ, SET_NOTIFICATION_DATA } from "../constants/actionTypes";

export const setNotificationData = data => ({
  type: SET_NOTIFICATION_DATA,
  payload: data
});

export const markNotificationAsRead = () => ({
  type: MARK_NOTIFICATION_AS_READ
});

export const showNewMessage = () => (dispatch, getState) => {
  const state = getState();
  const title = state.notifications.title || 'New Message';
  const body = state.notifications.body;

  Alert.alert(
    title,
    body,
    [
      {
      text: 'Ok',
      onPress: () => dispatch(markNotificationAsRead())
      }
    ]
  );
};
