import { connect } from 'react-redux';
import HairColorSelect from '../../components/HairColorSelect';
import { setHairColor } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setHairColor: color => dispatch(setHairColor(color))
});

export default connect(null, mapDispatchToProps)(HairColorSelect);
