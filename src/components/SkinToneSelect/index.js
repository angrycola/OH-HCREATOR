import React from 'react';
import { skinTones } from '../../assets/data';

const skinToneSelect = ({ setSkinTone, activeSkinTone }) => {

	const setToneHandler = (tone) => setSkinTone(tone);
	const activeStyle = { border: '2px solid red' };

	const renderColors = skinTones.map(tone => {
		return <div key={ tone[0] }>
			<button
				onClick={ () => setToneHandler(tone[2]) }
				className='round-botton'
				style={
					tone[1] === activeSkinTone
						? {...activeStyle, ...{ backgroundColor: `${ tone[1]}` }}
						: { backgroundColor: `${ tone[1]}` }
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
