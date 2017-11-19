import React from 'react';
import { facialHairStyle } from '../../assets/data';

const facialHairSelect = ({ setFacialHairsStyle, activeFacialHair }) => {


	const facialHairStyleStepLeft = () => {
		if (activeFacialHair.num === 1) {
			return setFacialHairsStyle(facialHairStyle[8]);
		} else {
			const updated = facialHairStyle[activeFacialHair.num - 2];
			setFacialHairsStyle(updated);
		}
	};

	const facialHairStyleStepRight = () => {
		if (activeFacialHair.num === 9) {
			setFacialHairsStyle(facialHairStyle[0]);
		} else {
			const updated = facialHairStyle[activeFacialHair.num];
			setFacialHairsStyle(updated);
		}
	};

	return (
		<div className='facial-style-container'>
			<div className='facial-style-box cursor-arrow' onClick={ facialHairStyleStepLeft }>&#8249;</div>
			<div className='facial-style-box'>Facial Hair</div>
			<div className='facial-style-box cursor-arrow' onClick={ facialHairStyleStepRight }>&#8250;</div>
		</div>
	);
};


export default facialHairSelect;
