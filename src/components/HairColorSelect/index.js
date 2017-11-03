import React from 'react';
import { hairColors } from '../../assets/data';

const hairColorSelect = ({ setHairColor }) => {

	const setColorHandler = color => {
		setHairColor(color);
	};

	const renderColors = hairColors.map(color => {
		return <div key={ color[0] }>
			<button
				onClick={ () => setColorHandler(color[1]) }
				className='round-botton'
				style={{ backgroundColor: `${ color[1]}` }}
			/>
		</div>;
	});

	return (
		<div className='skinToneSelector'>
			{ renderColors }
		</div>
	);

};

export default hairColorSelect;
