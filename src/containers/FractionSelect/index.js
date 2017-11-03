import { connect } from 'react-redux';
import FractionSelect from '../../components/FractionSelect';
import { setFraction } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeFraction: hero.fraction });

const mapDispatchToProps = dispatch => ({
	setFraction: fraction => dispatch(setFraction(fraction))
});

export default connect(mapStateToProps, mapDispatchToProps)(FractionSelect);
