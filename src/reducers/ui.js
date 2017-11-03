import C from '../constants';

export default function(state={ showAddNameForm: false }, action) {
	switch (action.type) {
	case C.SHOW_FINAL_FORM:
		return { showAddNameForm: true };
	case C.HIDE_FINAL_FORM:
		return { showAddNameForm: false };
	default: return state;
	}
}
