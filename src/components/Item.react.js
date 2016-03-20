'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Items extends React.Component {
	render() {
		return (
			<div>
				<h1>Items</h1>
				<h2>{this.props.params.category}</h2>
			</div>
		);
	}
}
