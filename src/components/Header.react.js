'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<ul role="nav">
					<li><Link to="/items">Items</Link></li>
				</ul>
			</header>
		);
	}
}
