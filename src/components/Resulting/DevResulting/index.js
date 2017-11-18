import React from 'react';

const devResulting = ({ hero }) =>

	<div>
		<div>Faction: { hero.fraction } Army	</div>
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
			---> { hero.hairStyle.title }, { hero.hairStyle.pos }
		</div>
		<div>Hair color:
			{ hero.facialHair }
		</div>
		{	hero.name ? <div>{hero.name}</div> : null	}
	</div>;
export default devResulting;
