import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = ({ ui }) => ({ ui });
export default connect(mapStateToProps)(App);
