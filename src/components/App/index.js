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
	<div>
		<div className='create-hero-container'>
			<div className="hero-result">
				<Resulting />
			</div>
			<section className='hero-options'>
				<FractionSelect />
				<HeroClassSelect />
				<SkinToneSelect />
				<HairColorSelect />
				<HairStyleSelect />
				<FacialHairSelect />
				<ReadyButton />
				{ ui.showAddNameForm ? <NameField /> : null	}
			</section>
		</div>
	</div>

export default App;
