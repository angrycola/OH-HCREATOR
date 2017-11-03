import { connect } from 'react-redux';
import FractionSelect from '../../components/FractionSelect';
import { setFraction } from '../../actions';

const mapDispatchToProps = dispatch => ({
	setFraction: fraction => dispatch(setFraction(fraction))
});

export default connect(null, mapDispatchToProps)(FractionSelect);
