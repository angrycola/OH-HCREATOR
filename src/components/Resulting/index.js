import React from 'react';
import National from './National';
import Royal from './Royal';

const resulting = ({ hero }) => {
	return (
		<div>
			{ hero.fraction === 'National'
				? <National hero={ hero } />
				: <Royal hero={ hero } />
			}
		</div>
	);
};

export default resulting;
