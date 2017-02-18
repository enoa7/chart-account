import React from 'react';

export default class Question extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<h1>{`Hello ${this.props.name}! are you?`}</h1>
		)

	}

}