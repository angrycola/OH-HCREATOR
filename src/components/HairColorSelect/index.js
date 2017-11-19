import React from 'react';
import { hairColors } from '../../assets/data';

const hairColorSelect = ({ setHairColor, activeHairColor }) => {

	const setColorHandler = color => setHairColor(color);
	const activeStyle = { border: '2px solid salmon' };

	const renderColors = hairColors.map(color =>
		<div
			key={ color.num }
			onClick={ () => setColorHandler(color) }
			style={
				color.color === activeHairColor.color
					? {...activeStyle, ...{ backgroundColor: `${ color.color }` }}
					: { backgroundColor: `${ color.color }` }
			}
		/>
	);

	return (
		<div className='hair-tone-container'>
			<div className='hair-tone-box'>Hair Tones</div>
			<div className='hair-tone-colors'>
				{ renderColors }
			</div>
		</div>
	);
};

export default hairColorSelect;
