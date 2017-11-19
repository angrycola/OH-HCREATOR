import React from 'react';
import { hairStyles } from '../../assets/data';

const hairStyleSelect = ({ setHairStyle, activeHairStyle }) => {

	const hairStyleStepLeft = () => {
		if (activeHairStyle.num === 1) {
			return setHairStyle(hairStyles[6]);
		} else {
			const updated = hairStyles[activeHairStyle.num - 2];
			setHairStyle(updated);
		}
	};

	const hairStyleStepRight = () => {
		if (activeHairStyle.num === 7) {
			setHairStyle(hairStyles[0]);
		} else {
			const updated = hairStyles[activeHairStyle.num];
			setHairStyle(updated);
		}
	};

	return (
		<div className='hair-style-container'>
			<div className='hair-style-box cursor-arrow' onClick={ hairStyleStepLeft }>&#8249;</div >
			<div className='hair-style-box'>Hair Style</div>
			<div className='hair-style-box cursor-arrow' onClick={ hairStyleStepRight }>&#8250;</div >
		</div>
	);
};

export default hairStyleSelect;
