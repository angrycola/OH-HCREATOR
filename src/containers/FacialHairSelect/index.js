import { connect } from 'react-redux';
import FacialHairSelect from '../../components/FacialHairSelect';
import { setFacialHairsStyle } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeFacialHair: hero.facialHair });

const mapDispatchToProps = dispatch => ({	setFacialHairsStyle: style => dispatch(setFacialHairsStyle(style)) });

export default connect(mapStateToProps, mapDispatchToProps)(FacialHairSelect);
