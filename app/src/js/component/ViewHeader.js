import React from 'react';

export default class ViewHeader extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="view-header">
				<div className="view-header-title"><h2 className="bold">Charts of Accounts</h2></div>
				<div>{/* list of table action */}</div>
				<a href="#" className="btn btn-primary btn-lg">New Account</a>	
			</header>
		)
		
	}
}