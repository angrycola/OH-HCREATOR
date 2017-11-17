import React from 'react';
import National from './National';
import Royal from './Royal';
import DevResulting from './DevResulting';

const resulting = ({ hero }) => {
	return (
		<div>
			{ hero.fraction === 'National'
				? <National hero={ hero } />
				: <Royal hero={ hero } />
			}
			<DevResulting hero={ hero }/>
		</div>
	);
};

export default resulting;
