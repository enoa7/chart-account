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
							  <label htmlFor="acc-type">Account Type</label>
							  <select className="form-control" id="acc-type">
							  	<option>Select an account type</option>
							    <option>Bank</option>
							    <option>Loan</option>
							    <option>Private</option>
							    <option>Magic(?)</option>
							  </select>
							</div>
							<div className="form-group">
							  <label htmlFor="acc-category">Account Category</label>
							  <select className="form-control" id="acc-category">
							  	<option>Select an account category</option>
							    <option>Category 1</option>
							    <option>Category 2</option>
							    <option>Category 3</option>
							    <option>Category 4</option>
							  </select>
							</div>

							<div className="form-group">
							  <label htmlFor="acc-parent">Parent Account(optional)</label>
							  <select className="form-control" id="acc-parent">
							  	<option>Select parent account</option>
							    <option>Parent 1</option>
							    <option>Parent 2</option>
							    <option>Parent 3</option>
							    <option>Parent 4</option>
							  </select>
							</div>

							<div className="form-group">
							  <label htmlFor="acc-code">Code<p className="sub-label">A unique code/number for this account, up to 10 characters.</p></label>
							  <input className="form-control" type="text" id="acc-code"/>
							</div>

							<div className="form-group">
							  <label htmlFor="acc-name">Name<p className="sub-label">A short title for this account, up to 150 characters.</p></label>
							  <input className="form-control" type="text" id="acc-name"/>
							</div>

							<div className="form-group">
							  <label htmlFor="acc-desc">Description(optional)<p className="sub-label">A description of how this account should be used</p></label>
							  <input className="form-control" type="text" id="acc-desc"/>
							</div>

							<div className="form-group" data-form="status">
							  <label htmlFor="acc-status">Status<p className="sub-label">Set the status for this account</p></label>
							 <label><input type="radio" name="radio-active" id="radio-active" />Active</label>
							   <label><input type="radio" name="radio-inactive" id="radio-inactive" />Inactive</label>
							</div>

							<div className="form-group">
						  		<button type="submit" className="btn btn-primary">Submit</button>
						  	</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}