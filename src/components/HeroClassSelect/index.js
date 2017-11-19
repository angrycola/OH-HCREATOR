import React from 'react';
import { heroClasses } from '../../assets/data';

const heroClassSelect = ({ setHeroClass, activeHeroClass }) => {
	const activeStyle= { background: 'salmon'};
	const heroClassHandler = heroClass => setHeroClass(heroClass);
	const renderHeroClass = heroClasses.map(heroClass =>
		<div
			onClick={ () => heroClassHandler(heroClass[1]) }
			key={ heroClass[0] }
			className='hairStyleBox'
			style={ heroClass[1] === activeHeroClass ? activeStyle : null }
		>
			{ heroClass[1] }
		</div>
	);
	return (
		<div className='hairStyleSelector'>
			{ renderHeroClass }
		</div>
	);
};
export default heroClassSelect;
