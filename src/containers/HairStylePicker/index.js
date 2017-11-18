import { connect } from 'react-redux';
import HairStylePicker from '../../components/HairStylePicker';
import { setHairStyle } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeHairStyle: hero.hairStyle });
const mapDispatchToProps = dispatch => ({	setHairStyle: style => dispatch(setHairStyle(style)) });

export default connect(mapStateToProps, mapDispatchToProps)(HairStylePicker);
