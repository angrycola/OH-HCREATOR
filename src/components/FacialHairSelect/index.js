import React from 'react';
import { facialHairStyle } from '../../assets/data';

const facialHairSelect = ({ setFacialHairsStyle, activeFacialHair }) => {

	const facialHairHandler = style => setFacialHairsStyle(style);

	const activeStyle= { background: 'salmon'};

	const renderHairStyle = facialHairStyle.map(style =>
		<div
			onClick={ () => facialHairHandler(style[1]) }
			key={style[0]}
			className='hairStyleBox'
			style={style[1] === activeFacialHair ? activeStyle : null }

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
