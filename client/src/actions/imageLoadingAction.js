import { IMAGE_LOADING, IMAGE_COMPLETE } from './types';

export const imageLoader = () => {
	return {
		type: IMAGE_LOADING
	};
};

export const imageComplete = () => {
	return {
		type: IMAGE_COMPLETE
	};
};
