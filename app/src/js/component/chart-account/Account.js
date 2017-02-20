import React from 'react';


import AccountList from './AccountList';


export default class Account extends React.Component{
	constructor() {
		super();
		this.apiURL = 'http://localhost:3000/account'; //this is generated from the json server module
		this.state = {
			posts: []
		}
	}


	render() {
		return (
				<table className="table" id="chart-account-lists">
					<thead>
				      <tr>
				      	<th><input type="checkbox" /></th>
				      	<th>Code</th>
				        <th>Name</th>
				        <th>Type</th>
				        <th>YTD</th>
				      </tr>
				    </thead>
				    <tbody>
				    	{this._getPosts()}
				    </tbody>
				</table>
		)
		
	}
}