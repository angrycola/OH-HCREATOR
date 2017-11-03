import { connect } from 'react-redux';
import SkinToneSelect from '../../components/SkinToneSelect';
import { setSkinTone } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setSkinTone: tone => dispatch(setSkinTone(tone))
});

export default connect(null, mapDispatchToProps)(SkinToneSelect);
