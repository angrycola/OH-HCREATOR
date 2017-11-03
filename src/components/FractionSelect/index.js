import React from 'react';
import { fractions } from '../../assets/data';

const fractionSelect = ({ setFraction }) => {
	const setFractionHandle = (fraction) => {
		setFraction(fraction);
	};

	const renderFractions = fractions.map(fraction =>
		<button			
			key={ fraction[0] }
			onClick={ () => setFractionHandle(fraction[1]) }
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
