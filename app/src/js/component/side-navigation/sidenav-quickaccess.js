import React from 'react';

export default class SideNavQuickAccess extends React.Component{

	render() {

		return (
			<div className="sidenav-quickaccess">
				<ul className="nodots">
					<li className="">Quick Access</li>
					<li className="">Financial Settings</li>
					<li className="">Sales Tax</li>
					<li className="">Charts of Account</li>
					<li className="">Payments</li>
				</ul>
			</div>
		)
		
	}
}