import { GET_MERCH, MERCH_LOADING, GET_FORBIDDEN, FORBIDDEN_LOADING } from '../actions/types';

const initialState = {
	itemListing: [],
	forbiddenListing: [],
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case MERCH_LOADING:
			return {
				...state,
				loading: true
			};
			case FORBIDDEN_LOADING:
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
			
		case GET_FORBIDDEN:
			return {
				...state,
				forbiddenListing: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
