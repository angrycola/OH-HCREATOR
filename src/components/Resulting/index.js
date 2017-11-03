import React from 'react';

const resulting = ({ hero }) =>
	<div>
		<div>Fraction:
			{ hero.fraction }
		</div>
		<div>Skin tone:
			{ hero.skinTone }
		</div>
		<div>Hair color:
			{ hero.hairColor }
		</div>
		<div>Hair style:
			{ hero.hairStyle }
		</div>
		<div>Name:
			{ hero.name }
		</div>
	</div>;
export default resulting;
