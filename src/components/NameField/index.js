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
			<form onSubmit={ this.handleSubmit } className='name-field-container'>
				<input
					onChange={ this.onChangeHandler }
					placeholder='4+ characters'
					type="text"
					value={ this.state.charName }
				/>
				<button type='submit' disabled={ this.state.validName }>Create my Hero!</button>
			</form>
		)
	}
}

export default NameField;
