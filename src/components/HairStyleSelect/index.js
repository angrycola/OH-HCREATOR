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
		<div className='hairStyleSelector'>
			<div>
				<button onClick={ hairStyleStepLeft }>left</button>
				hairs
				<button onClick={ hairStyleStepRight }>right</button>
			</div>
		</div>
	);
};

export default hairStyleSelect;
