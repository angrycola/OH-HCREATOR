import React from 'react';
import FractionSelect from '../../containers/FractionSelect';
import HeroClassSelect from '../../containers/HeroClassSelect';
import SkinToneSelect from '../../containers/SkinToneSelect';
import HairStylePicker from '../../containers/HairStylePicker';
import HairStyleSelect from '../../containers/HairStyleSelect';
import HairColorSelect from '../../containers/HairColorSelect';
import FacialHairPicker from '../../containers/FacialHairPicker';
import FacialHairSelect from '../../containers/FacialHairSelect';
import Resulting from '../../containers/Resulting';
import ReadyButton from '../../containers/ReadyButton';
import NameField from '../../containers/NameField';

const App = ({ ui }) =>
	<div className='container'>
		<div className="hero-result">
			<Resulting />
		</div>
		<div className='hero-options'>
			Fraction:
			<FractionSelect />
			Hero class:
			<HeroClassSelect />
			Skin tone:
			<SkinToneSelect />
			Hair Color:
			<HairColorSelect />
			Hair Style:
			<HairStylePicker />
			Facial hair select
			Hair style 2:
			<HairStyleSelect />
			FacialHairPicker:
			<FacialHairPicker />
			FacialHairSelect:
			<FacialHairSelect />
			<hr />
			<ReadyButton />
			{ ui.showAddNameForm
				? <NameField />
				: null
			}
		</div>
	</div>;

export default App;
