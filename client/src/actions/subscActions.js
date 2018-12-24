import axios from 'axios';

import { GET_SUBSCRIBER, GET_ERRORS } from './types';

export const newSubscriber = (userData, history) => dispatch => {
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
