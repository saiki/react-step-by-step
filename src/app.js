'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.react';
import Footer from './components/Footer.react';
import Items from './components/Items.react';
import Item from './components/Item.react';
import { Router, Route, hashHistory } from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
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
