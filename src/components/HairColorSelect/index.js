import React from 'react';
import { hairColors } from '../../assets/data';

const hairColorSelect = ({ setHairColor, activeHairColor }) => {

	const setColorHandler = color => setHairColor(color);
	const activeStyle = { border: '2px solid red' };

	const renderColors = hairColors.map(color => {
		return <div key={ color[0] }>
			<button
				onClick={ () => setColorHandler(color[1]) }
				className='round-botton'
				style={
					color[1] === activeHairColor
						? {...activeStyle, ...{ backgroundColor: `${ color[1]}` }}
						: { backgroundColor: `${ color[1]}` }
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

export default hairColorSelect;
