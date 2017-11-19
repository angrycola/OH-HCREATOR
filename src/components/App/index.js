import React from 'react';
import FractionSelect from '../../containers/FractionSelect';
import HeroClassSelect from '../../containers/HeroClassSelect';
import SkinToneSelect from '../../containers/SkinToneSelect';
import HairStyleSelect from '../../containers/HairStyleSelect';
import HairColorSelect from '../../containers/HairColorSelect';
import FacialHairSelect from '../../containers/FacialHairSelect';
import Resulting from '../../containers/Resulting';
import ReadyButton from '../../containers/ReadyButton';
import NameField from '../../containers/NameField';

const App = ({ ui, closeModule }) => {
	const closeModuleHandler = () => {
		closeModule();
	};

	return (
		<div>
			{ ui.closeModule
				?
				<div className='close-module' onClick={ closeModuleHandler } style={{ width: '30%' }}>Create Hero</div>
				:
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
			}
		</div>
	);
};

export default App;
