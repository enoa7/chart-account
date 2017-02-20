import React from 'react';
import MainViewHeader from './MainViewHeader';
import ChartAccountType from './chart-account/ChartAccountType';
import SearchAccount from './chart-account/SearchAccount';
import Account from './chart-account/Account';

export default class MainView extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="main-view col-xs-7 col-md-10">
				<header className="view-header">
					<div className="view-header-title"><h2 className="bold">Charts of Accounts</h2></div>
					<div>{/* list of table action */}</div>
					<a href="#" className="btn btn-primary btn-lg" onClick={this.props.isModal}>New Account</a>	
				</header>
				<ChartAccountType />
				<SearchAccount />
				<Account />
			</div>
		)
		
	}
}