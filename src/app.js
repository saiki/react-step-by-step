'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.react';
import Footer from './components/Footer.react';
import Items from './components/Items.react';
import Item from './components/Item.react';
import { Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { menuOpen: false }
	}

	click() {
		this.setState({menuOpen: !this.state.menuOpen});
	}

	render() {
		return (
			<div id="outerContainer">
				<Header open={this.state.menuOpen} />
				<main id="pageWrap">
					<button onClick={this.click.bind(this)}>menu</button>
					{this.props.children}
				</main>
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Radium(App)}>
			<Route path="/items" component={Items}>
				<Route path="/items/:category" component={Item}/>
			</Route>
		</Route>
	</Router>,
	document.getElementById("app")
);
