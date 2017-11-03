import React from 'react';
import FractionSelect from '../../containers/FractionSelect';
import SkinToneSelect from '../../containers/SkinToneSelect';
import HairStyleSelect from '../../containers/HairStyleSelect';
import HairColorSelect from '../../containers/HairColorSelect';
import FacialHairSelect from '../../containers/FacialHairSelect';
import Resulting from '../../containers/Resulting';

const App = () =>
	<div className='container'>
		<div className="hero-result">
			<Resulting />
		</div>
		<div className='hero-options'>
			Fraction:
			<FractionSelect />
			Skin tone:
			<SkinToneSelect />
			Hair Color:
			<HairColorSelect />
			Hair Style:
			<HairStyleSelect />
			Facial hair select
			<FacialHairSelect />
		</div>
	</div>;

export default App;
