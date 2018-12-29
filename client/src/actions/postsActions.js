import axios from 'axios';
import { GET_POSTS, POST_LOADING } from './types';

export const getPosts = () => dispatch => {
	dispatch(setPostsLoading());
	axios
		.get('/api/guest/posts')
		.then(res =>
			dispatch({
				type: GET_POSTS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_POSTS,
				payload: null
			})
		);
};

export const setPostsLoading = () => {
	return {
		type: POST_LOADING
	};
};
