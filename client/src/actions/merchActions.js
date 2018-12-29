import axios from 'axios';
import { GET_MERCH, MERCH_LOADING } from './types';

export const getMerch = () => dispatch => {
	dispatch(setMerchLoading());
	axios
		.get('/api/guest/merch')
		.then(res =>
			dispatch({
				type: GET_MERCH,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_MERCH,
				payload: null
			})
		);
};

export const setMerchLoading = () => {
	return {
		type: MERCH_LOADING
	};
};
