import React from 'react';
import { skinTones } from '../../assets/data';

const skinToneSelect = ({ setSkinTone, activeSkinTone }) => {

	const setToneHandler = tone => setSkinTone(tone);
	const activeStyle = { border: '2px solid salmon' };

	const renderColors = skinTones.map(tone =>
		<div
			key={ tone.num }
			onClick={ () => setToneHandler(tone) }
			style={
				tone.color === activeSkinTone.color
					? { ...activeStyle, ...{ backgroundColor: `${ tone.color }` }}
					: { backgroundColor: `${ tone.color }` }
			}
		/>
	);

	return (
		<div className='skin-tone-container'>
			<div className='skin-tone-box'>Skin Tones</div>
			<div  className='skin-tone-colors'>
				{ renderColors }
			</div>
		</div>
	);

};

export default skinToneSelect;
