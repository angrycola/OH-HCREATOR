import React from 'react';

const readyButton = ({ randomise, showAddNameForm }) => {
	return (
		<div>
			<button onClick={ randomise }>Randomise</button>
			<button onClick={ showAddNameForm }>I'm ready!</button>
		</div>
	);
};
export default readyButton;
