import React from 'react';
import { fractions } from '../../assets/data';

const fractionSelect = ({ setFraction, activeFraction }) => {

	const activeStyle = { color: 'salmon' }

	const setFractionHandle = (fraction) => {
		setFraction(fraction);
	};

	const renderFractions = fractions.map(fraction =>
		<button
			key={ fraction[0] }
			onClick={ () => setFractionHandle(fraction[1]) }
			style={ fraction[1] === activeFraction ? activeStyle : null }
		>
			{ fraction[1] } Army
		</button>
	);

	return (
		<div>
			{ renderFractions }
		</div>
	);
};
export default fractionSelect;
