import React from 'react'
import ReactDOM from 'react-dom';
import MainView from './MainView';
import SideNavigation from './SideNavigation';

export default class App extends React.Component {
	render() {
		return (
			<div className="page clearfix">
				<SideNavigation />
				<MainView />
			</div>
		);
	}
}