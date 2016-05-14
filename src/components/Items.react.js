'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Items extends React.Component {
	render() {
		return (
			<div>
				<h1>Categories</h1>
				<ul role="nav">
					<li><Link to="/items/book">Book</Link></li>
					<li><Link to="/items/computer">Computer</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
