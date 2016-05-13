'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header.react';
import Items from './components/Items.react';
import Item from './components/Item.react';

injectTapEventPlugin();

export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<Header title="react-step-by-step"/>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/items" component={Items}>
				<Route path="/items/:category" component={Item}/>
			</Route>
		</Route>
	</Router>,
	document.getElementById("app")
);
