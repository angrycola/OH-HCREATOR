import React, { Component } from 'react';

class NameField extends Component {
	state={	charName: '', validName: true }

	handleSubmit = event => {
		event.preventDefault();
		this.props.setCharName(this.state.charName);
		this.setState({ charName: '' });
	}

	onChangeHandler = event => {
		const candidate = event.target.value;
		if (candidate.length > 3 && !/\W+/.test(candidate)) {
			this.setState({ validName: false })
		} else {
			this.setState({ validName: true })
		}
		this.setState({ charName: event.target.value });
	}

	render () {
		return (
			<div>
				<form onSubmit={ this.handleSubmit }>
					<input
						onChange={ this.onChangeHandler }
						placeholder='4+ characters'
						type="text"
						value={ this.state.charName }
					/>
					<button type='submit' disabled={ this.state.validName }>Create my Hero!</button>
					<button onClick={ this.props.hideAddNameForm }>x</button>
				</form>
			</div>
		)
	}
}

export default NameField;
