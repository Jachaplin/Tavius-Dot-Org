import {
  POST_SUBSCRIBER,
  GET_SUBSCRIBERS,
  GET_SUBSCRIBER,
  LOADING_SUBSCRIBER,
  DELETE_SUBSCRIBER
} from '../actions/types';

const initialState = {
  subscribers: [],
  subscriber: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_SUBSCRIBER:
      return {
        ...state,
        loading: true
      };
    case GET_SUBSCRIBERS:
      return {
        ...state,
        subscribers: action.payload,
        loading: false
      };
    case GET_SUBSCRIBER:
      return {
        ...state,
        subscriber: action.payload,
        loading: false
      };

    case POST_SUBSCRIBER:
      return {
        ...state,
        subscribers: [action.payload, ...state.subscribers],
        loading: true
      };
    case DELETE_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.posts.filter(
          subscriber => subscriber._id !== action.payload
        )
      };
    default:
      return state;
  }
}
