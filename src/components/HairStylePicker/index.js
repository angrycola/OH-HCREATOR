import React from 'react';
import { hairStyles } from '../../assets/data';

const hairStylePicker = ({ setHairStyle, activeHairStyle }) => {

	const activeStyle= { background: 'salmon'};
	const hairStyleHandler = style => setHairStyle(style);

	const renderHairStyle = hairStyles.map(style =>
		<div
			onClick={ () => hairStyleHandler(style) }
			key={ style.num }
			className='hairStyleBox'
			style={ style[1] === activeHairStyle ? activeStyle : null }
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
export default hairStylePicker;
