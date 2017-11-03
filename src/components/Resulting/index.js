import React from 'react';

const resulting = ({ hero }) =>
	<div>
		<div>Fraction:
			{ hero.fraction } Army
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
		<div>Hair style:
			{ hero.facialHair }
		</div>
		<div>Name:
			{ hero.name }
		</div>
	</div>;
export default resulting;
