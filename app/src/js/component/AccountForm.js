import React from 'react';

export default class AccountForm extends React.Component {

	_handleSubmit(e) {
		e.preventDefault();

		let name = this._name.value;
		let type = this._type.value;
		let code = this._code.value;
		let desc = this._desc.value;
		let total = (this._total.value.length) ? this._total.value : '-';

		this.props.addPost(name, type, code, desc, total);
	}

	render() {
		return (
			<div className="account-form">
				<div className="account-form-wrapper">

					<div className="content">
						<form
							onSubmit={this._handleSubmit.bind(this)}>

							<div className="form-group header">
								<h2 className="title">New Account</h2>
								<div className="btn-container">
									<a className="btn btn-danger" onClick={this.props.isModal}>Cancel</a>
									<button type="submit" className="btn btn-success">Save</button>
								</div>
							</div>

							<div className="form-body">
								<div className="form-group">
								  <label htmlFor="acc-type">Account Type</label>
								  <select className="form-control" id="acc-type" ref={(input) => this._type = input} require>
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
								  <input className="form-control" type="number" id="acc-code" ref={(input) => this._code = input} required/>
								</div>

								<div className="form-group">
								  <label htmlFor="acc-name">Name<p className="sub-label">A short title for this account, up to 150 characters.</p></label>
								  <input className="form-control" type="text" id="acc-name" ref={(input) => this._name = input} required/>
								</div>

								<div className="form-group">
								  <label htmlFor="acc-desc">Description(optional)<p className="sub-label">A description of how this account should be used</p></label>
								  <input className="form-control" type="text" id="acc-desc" ref={(input) => this._desc = input} required/>
								</div>

								<div className="form-group">
								  <label htmlFor="acc-total">Total</label>
								  <input className="form-control" type="text" id="acc-total" ref={(input) => this._total = input}/>
								</div>

								<div className="form-group" data-form="status">
								  <label htmlFor="acc-status">Status<p className="sub-label">Set the status for this account</p></label>
								 <label><input type="radio" name="radio-active" id="radio-active" />Active</label>
								   <label><input type="radio" name="radio-inactive" id="radio-inactive" />Inactive</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}