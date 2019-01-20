import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import subscReducer from './subscReducer';
import merchReducer from './merchReducer';
import postsReducer from './postsReducer';
import imageLoadingReducer from './imageLoadingReducer';

export default combineReducers({
	errors: errorReducer,
	subscriber: subscReducer,
	itemListing: merchReducer,
	posts: postsReducer,
	imageLoading: imageLoadingReducer
});
