import { connect } from 'react-redux';
import FacialHairSelect from '../../components/FacialHairSelect';
import { setFacialHairsStyle } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setFacialHairsStyle: style => dispatch(setFacialHairsStyle(style))
});

export default connect(null, mapDispatchToProps)(FacialHairSelect);
