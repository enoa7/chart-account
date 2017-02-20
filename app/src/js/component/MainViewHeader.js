import React from 'react';

export default class MainViewHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	_handleClick(e) {
		e.preventDefault();
		this.props.isModal = true;
	}

	render() {
		return (
			<header className="view-header">
				<div className="view-header-title"><h2 className="bold">Charts of Accounts</h2></div>
				<div>{/* list of table action */}</div>
				<a href="#" className="btn btn-primary btn-lg" onClick={this._handleClick.bind(this)}>New Account</a>	
			</header>
		)
		
	}
}