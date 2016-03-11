'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

export default class Header extends React.Component {
	render() {
		return (
			<AppBar
				title="react step by step"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
			/>
		);
	}
}
