import React from 'react'
import ReactDOM from 'react-dom';
import MainView from './MainView';
import SideNavigation from './SideNavigation';
import AccountForm from './AccountForm';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			modal: true
		}
	}

	_displayModal(e) {
		e.preventDefault();
		this.setState({ modal: !this.state.modal });
	}


	render() {
		return (
			<div className="page clearfix">
				<SideNavigation />
				<MainView isModal={this._displayModal.bind(this)} />
				{this.state.modal ? <AccountForm isModal={this._displayModal.bind(this)}/> : null }
				
			</div>
		);
	}
}