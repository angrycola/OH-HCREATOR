import React, { Component } from 'react';

class NameField extends Component {
	state={	charName: '' }

	handleSubmit = event => {
		event.preventDefault();
		const charName = this.state.charName;

		// Dont fuck up with validaton
		if (charName.length > 4) {
			this.props.setCharName(charName);
			this.setState({ charName: ''});
		}
	}

	onChangeHandler = event => {
		this.setState({ charName: event.target.value });
	}

	render () {

		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input
						onChange={ this.onChangeHandler }
						type="text"
						value={ this.state.charName }
					/>
					<button type='submit'>Add Name and Create a Hero</button>
					<button onClick={ this.props.hideAddNameForm }>x</button>
				</form>
			</div>
		)
	}
}

export default NameField;
