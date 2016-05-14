'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const style = {
	position: "fixed",
	bottom: "0px",
	height: "40px",
	width: "100%",
	textAlign: "center"
};

export default class Footer extends React.Component {
	render() {
		return (
			<footer style={style}>
				<p>copy right ...</p>
			</footer>
		);
	}
}
