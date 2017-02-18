import React from 'react';

export default class SideNavMenuList extends React.Component{

	render() {

		return (
			<div className="sidenav-menu">
				<div className="sidenav-menu-list">
					<i className="fa fa-tachometer fa-lg"></i>
					<span>Dashboard</span>
				</div>
				<div className="sidenav-menu-list">
					<i className="fa fa-exchange fa-lg"></i>
					<span>Transactions</span>
				</div>

				<div className="sidenav-menu-list">
					<i className="fa fa-file-text fa-lg"></i>
					<span>Invoices</span>
				</div>

				<div className="sidenav-menu-list">
					<i className="fa fa-file fa-lg"></i>
					<span>Bills</span>
				</div>

				<div className="sidenav-menu-list">
					<i className="fa fa-credit-card fa-lg"></i>
					<span>Expenses</span>
				</div>

				<div className="sidenav-menu-list">
					<i className="fa fa-bar-chart fa-lg"></i>
					<span>Reports</span>
				</div>

				<div className="sidenav-menu-list">
					<i className="fa fa-gear fa-lg"></i>
					<span>Settings</span>
				</div>
			</div>
		)
		
	}
}