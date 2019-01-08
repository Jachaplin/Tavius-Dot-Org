import axios from 'axios';

import {
	POST_SUBSCRIBER,
	GET_SUBSCRIBER,
	GET_SUBSCRIBERS,
	LOADING_SUBSCRIBER,
	DELETE_SUBSCRIBER,
	GET_ERRORS,
	CLEAR_ERRORS
} from './types';

export const newSubscriber = userData => dispatch => {
	dispatch(clearErrors());
	axios
		.post('/api/subscribe', userData)
		.then(res =>
			dispatch({
				type: POST_SUBSCRIBER,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Subscriber
export const getSubscribers = () => dispatch => {
	dispatch(setSubscriberLoading());
	axios
		.get('/api/subscribe')
		.then(res =>
			dispatch({
				type: GET_SUBSCRIBERS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_SUBSCRIBERS,
				payload: null
			})
		);
};

// Get Subscriber
export const getSubscriber = id => dispatch => {
	dispatch(setSubscriberLoading());
	axios
		.get(`/api/subscribe/${id}`)
		.then(res =>
			dispatch({
				type: GET_SUBSCRIBER,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_SUBSCRIBER,
				payload: null
			})
		);
};

// Delete post
export const deleteSubscriber = id => dispatch => {
	axios
		.delete(`/api/subscribe/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_SUBSCRIBER,
				payload: id
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set loading state
export const setSubscriberLoading = () => {
	return {
		type: LOADING_SUBSCRIBER
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
