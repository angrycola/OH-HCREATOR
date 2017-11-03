import C from '../constants';

export default function(state={}, action) {
	switch (action.type) {
	case C.RANDOM_HERO:
		return action.payload;
	case C.SET_FRACTION:
		return { ...state, fraction: action.payload };
	case C.SET_SKINTONE:
		return { ...state, skinTone: action.payload };
	default: return state;
	}
}
