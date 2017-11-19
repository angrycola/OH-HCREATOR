import { connect } from 'react-redux';
import App from '../../components/App';
import { closeModule } from '../../actions';

const mapStateToProps = ({ ui }) => ({ ui });
const mapDispatchToProps = dispatch => ({
	closeModule: () => dispatch(closeModule())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
