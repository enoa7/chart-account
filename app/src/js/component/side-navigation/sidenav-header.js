import React from 'react';

export default class SideNavHeader extends React.Component{

	render() {

		return (
			<header>
				<a><i className="fa fa-empire fa-lg" aria-hidden="true"></i></a>
				<a><i className="fa fa-question fa-lg" aria-hidden="true"></i></a>
				<a><i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i></a>
				<a><i className="fa fa-bell fa-lg" aria-hidden="true"></i></a>
			</header>
		)
		
	}
}