import React from 'react';

export default class AccountList extends React.Component{
	constructor(props) {
		super(props);
	}

	// add prefix '0' on the ID
	_procID() {
		let accountID = this.props.id.toString();
		return '0' + accountID;
	}

	// add dots on every 3 digits
	_procTotal() {
		let accountTotal = this.props.total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
		return accountTotal;
	}

	render() {
		return (
			<tr>
				<td>
					<input type="checkbox" />
				</td>
				<td className="account-id">
					{this._procID()}
				</td>
				<td className="account-name">
					<h4 className="bold">{this.props.name}</h4>
					<p>{this.props.desc}</p>
				</td>
				<td className="account-type">
					{this.props.type}
				</td>
				<td className="account-total">
					{this._procTotal()}
				</td>
			</tr>
		)
		
	}
}