import { connect } from 'react-redux';
import NameField from '../../components/NameField';
import { setCharName, hideAddNameForm } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setCharName: name => dispatch(setCharName(name)),
	hideAddNameForm: () => dispatch(hideAddNameForm())
});

export default connect(null, mapDispatchToProps)(NameField);
