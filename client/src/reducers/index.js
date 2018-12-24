import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import subscReducer from './subscReducer';

export default combineReducers({
	errors: errorReducer,
	subscriber: subscReducer
});
