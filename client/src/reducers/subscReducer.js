import isEmpty from '../validation/is-empty';

import { POST_SUBSCRIBER } from '../actions/types';

const initialState = {
  subscriber: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_SUBSCRIBER:
      return {
        ...state,
        subscriber: action.payload
      };
    default:
      return state;
  }
}
