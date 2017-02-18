import React from 'react';

export default class SideNavigation extends React.Component{
	constructor() {
		super();
	}

	render() {

		return (

			<div className="side-navigation col-xs-3 col-sm-2">
				<header>
					<i className="fa fa-empire fa-lg" aria-hidden="true"></i>
					<i className="fa fa-question fa-lg" aria-hidden="true"></i>
					<i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
					<i className="fa fa-bell fa-lg" aria-hidden="true"></i>
				</header>
				
			</div>

		)
		
	}
}