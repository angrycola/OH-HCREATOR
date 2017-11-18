import React from 'react';
import '../../../assets/css/heroNational.css';

const national = ({ hero }) => {
	const { hairStyle, hairColor, facialHair, heroClass } = hero;
	const setCharBody = () => {
		if (heroClass === 'Soldier') {
			return 'national-body-soldier';
		} else if (heroClass === 'Gunner') {
			return 'national-body-gunner';
		} else {
			return 'national-body-commando';
		}
	};

	return (
		<div>
			<div className='resulting-wrapper'>
				<div className="national-head" style={{ backgroundPosition: `${ hero.skinTone }` }}></div>
				<div className="national-eyes"></div>
				<div className="national-hair" style={{ backgroundPosition: `${ hairColor }px ${ hairStyle.pos }px` }}></div>
				<div className="national-facial" style={{ backgroundPosition: `${ -346 + (1*hairColor) }px ${ facialHair.pos }px` }}></div>
				<div className={ `national-body ${ setCharBody() }` }></div>
			</div>
		</div>
	);
};

export default national;
