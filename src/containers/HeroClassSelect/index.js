import { connect } from 'react-redux';
import HeroClassSelect from '../../components/HeroClassSelect';
import { setHeroClass } from '../../actions';

const mapStateToProps = ({ hero }) => ({ activeHeroClass: hero.heroClass });
const mapDispatchToProps = dispatch => ({	setHeroClass: heroClass => dispatch(setHeroClass(heroClass)) });

export default connect(mapStateToProps, mapDispatchToProps)(HeroClassSelect);
