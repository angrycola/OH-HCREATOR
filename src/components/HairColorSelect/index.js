import React from 'react';
import { hairColors } from '../../assets/data';

const hairColorSelect = ({ setHairColor, activeHairColor }) => {

	const setColorHandler = color => setHairColor(color);
	const activeStyle = { border: '2px solid red' };

	const renderColors = hairColors.map(color => {
		return <div key={ color.num }>
			<button
				onClick={ () => setColorHandler(color) }
				className='round-botton'
				style={
					color.color === activeHairColor.color
						? {...activeStyle, ...{ backgroundColor: `${ color.color }` }}
						: { backgroundColor: `${ color.color }` }
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
