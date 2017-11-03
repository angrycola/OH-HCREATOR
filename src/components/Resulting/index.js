import React from 'react';

const resulting = ({ hero }) =>
	<div>
		<div>Fraction: { hero.fraction } Army	</div>
		<div>Class: { hero.heroClass } </div>
		<div>Skin tone:
			<div className='result-box' style={{ background: `${ hero.skinTone }` }}></div>
			{ hero.skinTone }
		</div>
		<div>Hair color:
			<div className='result-box' style={{ background: `${ hero.hairColor }` }}></div>
			{ hero.hairColor }
		</div>
		<div>Hair style:
			{ hero.hairStyle }
		</div>
		<div>Hair style:
			{ hero.facialHair }
		</div>
		<div>Name:
			{ hero.name ? hero.name : '4+ characters' }
		</div>
	</div>;
export default resulting;
