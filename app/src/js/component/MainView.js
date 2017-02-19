import React from 'react';
import ViewHeader from './ViewHeader';
import ChartAccountType from './chart-account/ChartAccountType';
import SearchAccount from './chart-account/SearchAccount';

export default class MainView extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="main-view">
				<ViewHeader />
				<ChartAccountType />
				<SearchAccount />
			</div>
		)
		
	}
}