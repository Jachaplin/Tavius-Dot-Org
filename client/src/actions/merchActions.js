import axios from 'axios';
import { GET_MERCH, MERCH_LOADING, GET_FORBIDDEN, FORBIDDEN_LOADING } from './types';

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

export const getForbidden = () => dispatch => {
	dispatch(setForbiddenLoading());
	axios
		.get('/api/guest/forbidden')
		.then(res =>
			dispatch({
				type: GET_FORBIDDEN,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_FORBIDDEN,
				payload: null
			})
		);
};

export const setMerchLoading = () => {
	return {
		type: MERCH_LOADING
	};
};

export const setForbiddenLoading = () => {
	return {
		type: FORBIDDEN_LOADING
	};
};