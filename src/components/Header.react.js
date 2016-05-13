'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends React.Component {
	constructor(props) {
		super(props);
		let open = this.props.open ? true : false;
		this.state = { open: open, title: props.title };
	}

	toggleNavigation() {
		this.setState({ open: ! this.state.open });
	}

	render() {
		return (
				<AppBar title={this.state.title} onLeftIconButtonTouchTap={this.toggleNavigation.bind(this)}>
					<Drawer open={this.state.open}>
						<MenuItem linkButton={true} href="/items" primaryText="Items" />
					</Drawer>
				</AppBar>
		);
	}
}

Header.propTypes = { open: React.PropTypes.bool, title: React.PropTypes.string };
Header.defaultProps = { open: false, title: "" };

export default Header;
