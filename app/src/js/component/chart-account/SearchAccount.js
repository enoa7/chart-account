import React from 'react';

export default class SearchAccount extends React.Component{

	render() {
		return (
			<div className="search-box">
				<i className="fa fa-search"></i>
				<input type="text" className="" placeholder="Search.." />
			</div>
		)
		
	}
}