import React from 'react';
import '../../../assets/css/heroRoyal.css';

const royal = ({ hero }) => {
	const { hairStyle, hairColor, facialHair, heroClass, skinTone } = hero;
	const setCharBody = () => {
		if (heroClass === 'Soldier') {
			return 'royal-body-soldier';
		} else if (heroClass === 'Gunner') {
			return 'royal-body-gunner';
		} else {
			return 'royal-body-commando';
		}
	};

	return (
		<div>
			<div className='resulting-wrapper'>
				<div className="royal-head" style={{ backgroundPosition: `${ skinTone.pos }` }}></div>
				<div className="royal-eyes"></div>
				<div className="royal-hair" style={{ backgroundPosition: `${ hairColor.pos }px ${ hairStyle.pos }px` }}></div>
				<div className="royal-facial" style={{ backgroundPosition: `${ -346 + (1*hairColor.pos) }px ${ facialHair.pos }px` }}></div>
				<div className={ `royal-body ${ setCharBody() }` }></div>
			</div>
		</div>
	);
};

export default royal;
