// import dependencies
import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import axios from 'axios';

// import components
import MainViewHeader from './MainViewHeader';
import ChartAccountType from './chart-account/ChartAccountType';
import SearchAccount from './chart-account/SearchAccount';
import AccountForm from './AccountForm';
import AccountList from './chart-account/AccountList';


export default class MainView extends React.Component{
	constructor() {
		super();
		this.apiURL = 'http://localhost:3000/account'; //this is generated from the json server module
		this.state = {
			isModal: false,
			posts: []
		}
	}

	_displayModal(e) {
		e.preventDefault();
		this.setState({ isModal: !this.state.isModal });
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
					key={post.id}
					code={post.code}
					name={post.name}
					desc={post.desc}
					type={post.type}
					total={post.total} />
			)
		})
	}

	_addPost(name, type, code, desc, total) {

		const account = {
			id: this.state.posts.length + 1,
			code,
			name,
			desc,
			type,
			total
		}

		axios.post(this.apiURL, account)
		.then(res => {
			this.setState({
				isModal: false,
				posts: this.state.posts.concat([account])
			})
		})
	}

	componentWillMount() {
		this._fetchPosts();
	}

	render() {

		return (
			<div className="main-view col-xs-9 col-md-10">
				<header className="view-header">
					<div className="view-header-title"><h2 className="bold">Charts of Accounts</h2></div>
					<div>{/* list of table action */}</div>
					<a href="#" className="btn btn-primary btn-lg" onClick={this._displayModal.bind(this)}>New Account</a>	
				</header>
				<ChartAccountType />
				<SearchAccount />
				{/*<table className="table" id="chart-account-lists">
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
				</table> */}

				<BootstrapTable data={this.state.posts} pagination>
				  {/*<TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn> */}
				  <TableHeaderColumn isKey dataField='code'dataAlign='center' width='90'>Code</TableHeaderColumn>
				  <TableHeaderColumn dataField='name' width='150'>Name</TableHeaderColumn>
				  <TableHeaderColumn dataField='type' width='150'>Type</TableHeaderColumn>
				  <TableHeaderColumn dataField='total' width='150'>YTD</TableHeaderColumn>
				</BootstrapTable>

				{this.state.isModal ? <AccountForm isModal={this._displayModal.bind(this)} addPost={this._addPost.bind(this)} /> : null }
			</div>
		)
		
	}
}