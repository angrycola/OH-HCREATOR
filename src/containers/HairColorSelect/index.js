import { connect } from 'react-redux';
import HairColorSelect from '../../components/HairColorSelect';
import { setHairColor } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeHairColor: hero.hairColor });
const mapDispatchToProps = dispatch => ({ setHairColor: color => dispatch(setHairColor(color)) });

export default connect(mapStateToProps, mapDispatchToProps)(HairColorSelect);
