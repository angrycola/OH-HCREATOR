import { connect } from 'react-redux';
import HairStyleSelect from '../../components/HairStyleSelect';
import { setHairStyle } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setHairStyle: style => dispatch(setHairStyle(style))
});

export default connect(null, mapDispatchToProps)(HairStyleSelect);
