import { GET_MERCH, MERCH_LOADING } from '../actions/types';

const initialState = {
	itemListing: [],
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case MERCH_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_MERCH:
			return {
				...state,
				itemListing: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
