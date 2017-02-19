import React from 'react';

export default class ChartAccountType extends React.Component{

	render() {
		return (
			<div className="account-type-list">
				<ul>
					<li>All Accounts</li>
					<li>Assets</li>
					<li>Liabilities</li>
					<li>Expenses</li>
					<li>Equity</li>
					<li>Revenue</li>
				</ul>
			</div>
		)
		
	}
}