'use strict';

import React from 'react';
import { Link } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import Radium from 'radium'

let RadiumLink = Radium(Link);

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let menuStyle = {
			backgroundColor : "white"
		};

		return (
			<div>
				<Menu id="home" open={this.props.open} pageWrapId={ "pageWrap" } outerContainerId={"outerContainer"} style={menuStyle}>
					<b>Menu</b>
					<RadiumLink className="menu-item" to="/">Home</RadiumLink>
					<RadiumLink className="menu-item" to="/items">Items</RadiumLink>
				</Menu>
			</div>
		);
	}
}

export default Radium(Header);
