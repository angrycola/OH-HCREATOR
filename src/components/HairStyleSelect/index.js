import React from 'react';
import { hairStyles } from '../../assets/data';

const hairStyleSelect = ({ setHairStyle }) => {

	const hairStyleHandler = style => setHairStyle(style);

	const renderHairStyle = hairStyles.map(style =>
		<div
			onClick={ () => hairStyleHandler(style[1]) }
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
export default hairStyleSelect;
