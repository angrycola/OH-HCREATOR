import C from '../constants';

export default function(state={}, action) {
	switch (action.type) {
	case C.RANDOM_HERO:		
		return action.payload;
	default: return state;
	}
}
