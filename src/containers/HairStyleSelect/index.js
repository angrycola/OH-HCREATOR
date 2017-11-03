import { connect } from 'react-redux';
import HairStyleSelect from '../../components/HairStyleSelect';
import { setHairStyle } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeHairStyle: hero.hairStyle });
const mapDispatchToProps = dispatch => ({	setHairStyle: style => dispatch(setHairStyle(style)) });

export default connect(mapStateToProps, mapDispatchToProps)(HairStyleSelect);
