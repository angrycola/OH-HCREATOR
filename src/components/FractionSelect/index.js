import React from 'react';

const fractionSelect = ({ setFraction }) => {
	const setFractionHandle = event => {
		setFraction(event.target.value);
	};

	return (
		<div>
			<button onClick={ setFractionHandle } value='1'>National Army</button>
			<button onClick={ setFractionHandle } value='2'>Royal Army</button>
		</div>
	);
};
export default fractionSelect;
