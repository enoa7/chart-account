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

class ActiveFormatter extends React.Component {
  render() {
    return (
      <input type='checkbox' checked={ this.props.active }/>
    );
  }
}

function activeFormatter(cell, row) {
  return (
    <ActiveFormatter active={ cell } />
  );
}

function afterSearch(searchText, result) {
  console.log('Your search text is ' + searchText);
  console.log('Result is:');
  for (let i = 0; i < result.length; i++) {
    console.log('Fruit: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }
}


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

		const options = {
		  afterSearch: afterSearch  // define a after search hook
		};

		return (
			<div className="main-view col-xs-9 col-md-10">
				<header className="view-header">
					<div className="view-header-title"><h2 className="bold">Charts of Accounts</h2></div>
					<div>{/* list of table action */}</div>
					<a href="#" className="btn btn-primary btn-lg" onClick={this._displayModal.bind(this)}>New Account</a>	
				</header>
				<ChartAccountType />
				{/*<SearchAccount /> */}

				<BootstrapTable data={this.state.posts} search={ true } bordered={ false } pagination>
				  {/*<TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn> */}
				  <TableHeaderColumn dataFormat={ activeFormatter } width='60px' dataAlign='center' >Active</TableHeaderColumn>
				  <TableHeaderColumn isKey dataField='code' dataAlign='center' width='120px'>Code</TableHeaderColumn>
				  <TableHeaderColumn dataField='name' width='120px'>Name </TableHeaderColumn>
				  <TableHeaderColumn dataField='desc' width='120px'>Desc</TableHeaderColumn>
				  <TableHeaderColumn dataField='type' width='120px'>Type</TableHeaderColumn>
				  <TableHeaderColumn dataField='total' width='120px'>YTD</TableHeaderColumn>
				</BootstrapTable>

				{this.state.isModal ? <AccountForm isModal={this._displayModal.bind(this)} addPost={this._addPost.bind(this)} /> : null }
			</div>
		)
		
	}
}


