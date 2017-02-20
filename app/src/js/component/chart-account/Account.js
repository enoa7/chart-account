import React from 'react';
import axios from 'axios';

import AccountList from './AccountList';

export default class Account extends React.Component{
	constructor() {
		super();
		this.apiURL = 'http://localhost:3000/account'; //this is generated from the json server module
		this.state = {
			posts: []
		}
	}
	_fetchPosts() {
		axios.get(this.apiURL)
			.then(resp => {
				const posts = resp.data;
				this.setState({posts});
			})
	}

	_getPosts() {
		return this.state.posts.map( (post, index) => {
			return (
				<AccountList
					key={index}
					id={post.id}
					name={post.name}
					desc={post.desc}
					type={post.type}
					total={post.total} />
			)
		})
	}

	componentWillMount() {
		this._fetchPosts();
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