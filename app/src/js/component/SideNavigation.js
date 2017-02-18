import React from 'react';
import SideNavHeader from './side-navigation/sidenav-header';
import SideNavContent from './side-navigation/sidenav-content';
import SideNavQuickAccess from './side-navigation/sidenav-quickaccess';

export default class SideNavigation extends React.Component{
	constructor() {
		super();
	}

	render() {

		return (

			<div className="side-navigation col-xs-3 col-md-2">
				<SideNavHeader />
				<SideNavContent />
				<SideNavQuickAccess />
			</div>

		)
		
	}
}