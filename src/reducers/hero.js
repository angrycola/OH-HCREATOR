import C from '../constants';

export default function(state={}, action) {
	switch (action.type) {
	case C.RANDOM_HERO:
		return action.payload;
	case C.SET_FRACTION:
		return { ...state, fraction: action.payload };
	case C.SET_HEROCLASS:
		return { ...state, heroClass: action.payload };
	case C.SET_SKINTONE:
		return { ...state, skinTone: action.payload };
	case C.SET_HAIRCOLOR:
		return { ...state, hairColor: action.payload };
	case C.SET_HAIRSTYLE:
		return { ...state, hairStyle: action.payload };
	case C.SET_FACEHAIR:
		return { ...state, facialHair: action.payload };
	case C.SET_CHARNAME:
		return { ...state, name: action.payload };
	default: return state;
	}
}
