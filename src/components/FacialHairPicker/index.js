import React from 'react';
import { facialHairStyle } from '../../assets/data';

const facialHairPicker = ({ setFacialHairsStyle, activeFacialHair }) => {

	const facialHairHandler = style => setFacialHairsStyle(style);
	const activeStyle= { background: 'salmon'};

	const renderHairStyle = facialHairStyle.map(style =>
		<div
			onClick={ () => facialHairHandler(style) }
			key={ style.num }
			className='hairStyleBox'
			style={ style.title === activeFacialHair.title ? activeStyle : null }
		>
			{ style[1] }
		</div>
	);

	return (
		<div className='hairStyleSelector'>
			{ renderHairStyle }
		</div>
	);
};
export default facialHairPicker;
