import React from 'react';
import ViewHeader from './ViewHeader';
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
				<ViewHeader />
				<ChartAccountType />
				<SearchAccount />
				<Account />
			</div>
		)
		
	}
}