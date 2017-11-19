import C from '../constants';

export default function(state={ showAddNameForm: false, closeModule: false }, action) {
	switch (action.type) {
	case C.SHOW_FINAL_FORM:
		return { ...state, showAddNameForm: true };
	case C.HIDE_FINAL_FORM:
		return { ...state, showAddNameForm: false };
	case C.CLOSE_MODULE:
		return { ...state, closeModule: !state.closeModule };
	default: return state;
	}
}
