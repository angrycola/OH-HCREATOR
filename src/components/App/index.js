import React from 'react';
import FractionButton from '../../containers/FractionButton';
import SkincolorSelect from '../../containers/SkincolorSelect';
import HairstyleSelect from '../../containers/HairstyleSelect';
import Resulting from '../../containers/Resulting';

const App = () =>
	<div className='container'>
		<div className="hero-result">
			<Resulting />
		</div>
		<div className='hero-options'>
			<FractionButton />
			<SkincolorSelect />
			<HairstyleSelect />
		</div>
	</div>;

export default App;
