import { IMAGE_LOADING, IMAGE_COMPLETE } from '../actions/types';

const initialState = {
	imageLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IMAGE_LOADING:
			return {
				...state,
				imageLoading: true
			};
		case IMAGE_COMPLETE:
			return {
				...state,
				imageLoading: false
			};
		default:
			return state;
	}
}
