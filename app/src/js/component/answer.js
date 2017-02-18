import React from 'react';

export default class Answer extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div>
				<a className="btn btn-primary pull-left" onClick={this.props.handler}>{this.props.text}</a>
			</div>
		)
	}
}