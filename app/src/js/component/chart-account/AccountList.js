import React from 'react';
import $ from 'jquery';

export default class AccountList extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			isHighlighted: false
		}
	}

	_activate(target) {
		this.setState({ isHighlighted: !this.state.isHighlighted})
	}

	render() {

		// add dots on every 3 digits
		let _total = this.props.total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		let _classes = '';
		(this.state.isHighlighted) ? _classes += 'active' : null; 
		return (
			<tr onClick={this._activate.bind(this)} className={_classes}>
				<td>
					<input type="checkbox" />
				</td>
				<td className="account-code">
					{this.props.code}
				</td>
				<td className="account-name">
					<h4 className="bold">{this.props.name}</h4>
					<p>{this.props.desc}</p>
				</td>
				<td className="account-type">
					{this.props.type}
				</td>
				<td className="account-total">
					{/* this.props.total */}
					{_total}
				</td>
			</tr>
		)
		
	}
}