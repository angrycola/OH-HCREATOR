import { connect } from 'react-redux';
import Resulting from '../../components/Resulting';

const mapStateToProps = ({ hero }) => ({ hero });

export default connect(mapStateToProps)(Resulting);
