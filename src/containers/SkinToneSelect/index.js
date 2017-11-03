import { connect } from 'react-redux';
import SkinToneSelect from '../../components/SkinToneSelect';
import { setSkinTone } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeSkinTone: hero.skinTone });


const mapDispatchToProps = dispatch => ({
	setSkinTone: tone => dispatch(setSkinTone(tone))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinToneSelect);
