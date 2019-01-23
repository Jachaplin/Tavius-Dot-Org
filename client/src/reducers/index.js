import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import subscReducer from './subscReducer';
import merchReducer from './merchReducer';
import postsReducer from './postsReducer';

export default combineReducers({
	errors: errorReducer,
	subscriber: subscReducer,
	itemListing: merchReducer,
	forbiddenListing: merchReducer,
	posts: postsReducer
});
