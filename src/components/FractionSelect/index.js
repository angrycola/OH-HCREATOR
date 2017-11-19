import React from 'react';
import { fractions } from '../../assets/data';

const fractionSelect = ({ setFraction, activeFraction }) => {

	const activeStyle = { backgroundColor: 'salmon' }

	const setFractionHandle = (fraction) => {
		setFraction(fraction);
	};

	const renderFractions = fractions.map(fraction =>
		<div
			className='fraction-box'
			key={ fraction[0] }
			onClick={ () => setFractionHandle(fraction[1]) }
			style={ fraction[1] === activeFraction ? activeStyle : null }
		>
			{ fraction[1] } Army
		</div>
	);

	return (
		<div className='fraction-container'>
			{ renderFractions }
		</div>
	);
};
export default fractionSelect;
