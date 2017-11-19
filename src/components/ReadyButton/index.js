import React from 'react';

const readyButton = ({ randomise, showAddNameForm }) => {
	return (
		<div className='fraction-container'>
			<div className='fraction-box' onClick={ randomise }>Randomise</div>
			<div className='fraction-box' onClick={ showAddNameForm }>I'm ready!</div>
		</div>
	);
};
export default readyButton;
