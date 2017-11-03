import React from 'react';

const resulting = ({ hero }) =>
	<div>
		<div>Fraction:
			{ hero.fraction }
		</div>
		<div>Hair style:
			{ hero.hairStyle }
		</div>
		<div>Skin tone:
			{ hero.skinTone }
		</div>
		<div>Name:
			{ hero.name }
		</div>
	</div>;
export default resulting;
