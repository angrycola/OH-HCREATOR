import { connect } from 'react-redux';
import FacialHairPicker from '../../components/FacialHairPicker';
import { setFacialHairsStyle } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeFacialHair: hero.facialHair });

const mapDispatchToProps = dispatch => ({	setFacialHairsStyle: style => dispatch(setFacialHairsStyle(style)) });

export default connect(mapStateToProps, mapDispatchToProps)(FacialHairPicker);
