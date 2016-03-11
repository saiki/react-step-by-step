'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.react';
import Footer from './components/Footer.react';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Footer />
			</div>
		);
	}
}

ReactDOM.render(
	<App />, 
	document.getElementById("app")
);
