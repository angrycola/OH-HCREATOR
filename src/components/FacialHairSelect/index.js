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
		<div className='hairStyleSelector'>
			<div>
				<button onClick={ facialHairStyleStepLeft }>Left</button>
				Facial Hairs
				<button onClick={ facialHairStyleStepRight }>Right</button>
			</div>
		</div>
	);
};


export default facialHairSelect;
