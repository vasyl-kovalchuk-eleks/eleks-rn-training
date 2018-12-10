import { FETCH_TOPICS_REQUEST, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAILURE } from "../constants/actionTypes";

const initialState = {
  loading: false,
  items: [],
  errorCode: null
};

function topics(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOPICS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.filter(topic => !!topic)
      };
    case FETCH_TOPICS_FAILURE:
      return {...state, errorCode: action.payload, loading: false};
    default:
      return state;
  }
}

export default topics;
