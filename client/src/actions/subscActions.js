import axios from 'axios';

import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const newSubscriber = (userData, history) => dispatch => {
	dispatch(clearErrors());
	axios
		.post('/api/subscribe', userData)
		.then(res => history.push('/'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
