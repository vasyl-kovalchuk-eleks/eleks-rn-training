import { MARK_NOTIFICATION_AS_READ, SET_NOTIFICATION_DATA } from "../constants/actionTypes";

const initialAuthState = {
  body: '',
  title: '',
  newNotification: false
};

function notifications(state = initialAuthState, action) {
  switch (action.type) {
    case SET_NOTIFICATION_DATA:
      return { ...state, body: action.payload.body, title: action.payload.title || '', newNotification: true };
    case MARK_NOTIFICATION_AS_READ:
      return initialAuthState;
    default:
      return state;
  }
}

export default notifications;
