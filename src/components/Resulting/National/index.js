import React from 'react';
import '../../../assets/css/heroNational.css';

const national = ({ hero }) => {
	const { hairStyle, hairColor, facialHair, heroClass, skinTone } = hero;
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
				<div className="national-head" style={{ backgroundPosition: `${ skinTone.pos }` }}></div>
				<div className="national-eyes"></div>
				<div className="national-hair" style={{ backgroundPosition: `${ hairColor.pos }px ${ hairStyle.pos }px` }}></div>
				<div className="national-facial" style={{ backgroundPosition: `${ -346 + (1*hairColor.pos) }px ${ facialHair.pos }px` }}></div>
				<div className={ `national-body ${ setCharBody() }` }></div>
			</div>
		</div>
	);
};

export default national;
