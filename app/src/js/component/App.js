import React from 'react'
import ReactDOM from 'react-dom';
import MainView from './MainView';
import SideNavigation from './SideNavigation';

import axios from 'axios';

export default class App extends React.Component {

	render() {
		return (
			<div className="page clearfix">
				<SideNavigation />
				<MainView />
				{/*this.state.modal ? <AccountForm isModal={this._displayModal.bind(this)} /> : null */}
				
			</div>
		);
	}
}