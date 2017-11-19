import React from 'react';

const devResulting = ({ hero }) =>
	<div>
		<div>Faction: { hero.fraction } Army	</div>
		<div>Class: { hero.heroClass } </div>
		<div>Skin tone:
			<div className='result-box' style={{ background: `${ hero.skinTone.color }` }}></div>
			, pos: { hero.skinTone.pos }
		</div>
		<div>Hair color:
			<div className='result-box' style={{ background: `${ hero.hairColor.color }` }}></div>
			, pos: { hero.hairColor.pos }
		</div>
		<div>Hair style:
			{ hero.hairStyle.title }, pos: { hero.hairStyle.pos }
		</div>
		<div>Facial hair:
			{ hero.facialHair.title }, pos: { hero.facialHair.pos }
		</div>
		{	hero.name ? <div>{ hero.name }</div> : null	}
	</div>;
export default devResulting;
