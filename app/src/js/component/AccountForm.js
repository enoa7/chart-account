import React from 'react';

export default class AccountForm extends React.Component {
	render() {
		return (
			<div className="account-form">
				<div className="account-form-wrapper">
					<header>
						<h2 className="title">New Account</h2>
						<div className="btn-container">
							<a className="btn btn-danger" onClick={this.props.isModal}>Cancel</a>
							<a className="btn btn-success">Save</a>
						</div>
					</header>
					<div className="content">
						<form>
						  <div className="form-group">
						    <label for="exampleInputEmail1">Email address</label>
						    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
						  </div>
						  <div className="form-group">
						    <label for="exampleInputPassword1">Password</label>
						    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						  </div>
						  <div className="form-group">
						    <label for="exampleInputFile">File input</label>
						    <input type="file" id="exampleInputFile" />
						    <p className="help-block">Example block-level help text here.</p>
						  </div>
						  <div className="checkbox">
						    <label>
						      <input type="checkbox" /> Check me out
						    </label>
						  </div>
						  <button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}