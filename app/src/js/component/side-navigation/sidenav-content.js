import React from 'react';
import SideNavMenuList from './sidenav-menu-list';

export default class SideNavContent extends React.Component{

	render() {

		const padding = { paddingTop: '4px' }

		return (
			<div className="sidenav-content" style={padding}>
				<h3 className="company-title">Sith Empire</h3>
				<p className="" style={padding}>Darth Vader, Sith Lord</p>
				<SideNavMenuList />
			</div>
		)
		
	}
}