import React from 'react';

const resulting = ({ hero }) =>
	<div>
		<div>Fraction:
			{ hero.fraction }
		</div>
		<div>Hair style:
			{ hero.hairStyle }
		</div>
		<div>Skin color:
			{ hero.skinColor }
		</div>
		<div>Name:
			{ hero.name }
		</div>
	</div>;
export default resulting;
