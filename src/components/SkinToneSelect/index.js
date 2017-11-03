import React from 'react';
import { skinTones } from '../../assets/data';

const skinToneSelect = ({ setSkinTone }) => {

	const setToneHandler = (tone) => {
		setSkinTone(tone);
	};

	const renderColors = skinTones.map(tone => {
		return <div key={ tone[0] }>
			<button
				onClick={ () => setToneHandler(tone[1]) }
				className='round-botton'
				style={{ backgroundColor: `${ tone[1]}` }}
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
