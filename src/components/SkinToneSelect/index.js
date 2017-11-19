import React from 'react';
import { skinTones } from '../../assets/data';

const skinToneSelect = ({ setSkinTone, activeSkinTone }) => {

	const setToneHandler = tone => setSkinTone(tone);
	const activeStyle = { border: '2px solid red' };

	const renderColors = skinTones.map(tone => {
		return <div key={ tone.num }>
			<button
				onClick={ () => setToneHandler(tone) }
				className='round-botton'
				style={
					tone.color === activeSkinTone.color
						? { ...activeStyle, ...{ backgroundColor: `${ tone.color }` }}
						: { backgroundColor: `${ tone.color }` }
				}
			/>
		</div>;
	});

	return (
		<div className='skinToneSelector'>
			{ renderColors }
		</div>
	);

};

export default skinToneSelect;
