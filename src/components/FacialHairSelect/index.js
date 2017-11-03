import React from 'react';
import { facialHairStyle } from '../../assets/data';

const facialHairSelect = ({ setFacialHairsStyle }) => {

	const facialHairHandler = style => setFacialHairsStyle(style);

	const renderHairStyle = facialHairStyle.map(style =>
		<div
			onClick={ () => facialHairHandler(style[1]) }
			key={style[0]}
			className='hairStyleBox'
		>
			{style[1]}
		</div>
	);

	return (
		<div className='hairStyleSelector'>
			{ renderHairStyle }
		</div>
	);
};
export default facialHairSelect;
