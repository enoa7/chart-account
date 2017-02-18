import React from 'react';
import Question from './question';
import Answer from './answer';
import Response from './response';

export default class Header extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			answer: null
		}
	}

	_getAnswer() {
		console.log(this.props.text);
	}

	render() {

		return (

			<div className="jumbotron">
				<div className="container">
					<Question name="Marcie" />
					<div className="row">
						<Answer text="Yes" handler={this._getAnswer.bind(this)} />
						<Answer text="No" handler={this._getAnswer.bind(this)} />
					</div>
				</div>
				<Response />
			</div>

		)
		
	}
}