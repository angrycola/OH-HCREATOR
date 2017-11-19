import { connect } from 'react-redux';
import NameField from '../../components/NameField';
import { setCharName, hideAddNameForm, closeModule } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setCharName: name => dispatch(setCharName(name)),
	hideAddNameForm: () => dispatch(hideAddNameForm()),
	closeModule: () => dispatch(closeModule())
});

export default connect(null, mapDispatchToProps)(NameField);
