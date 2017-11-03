import { connect } from 'react-redux';
import ReadyButton from '../../components/ReadyButton';
import { randomise, showAddNameForm } from '../../actions';

export default connect(null, { randomise, showAddNameForm })(ReadyButton);
