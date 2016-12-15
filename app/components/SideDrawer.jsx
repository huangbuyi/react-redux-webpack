import React from 'react';
import './SideDrawer.css';


class SideDrawer extends React.Component {
	render () {
		return (
			<div className="sideDrawer">
				<div className="sideDrawer-header"></div>
				<div className="sideDrawer-container">
					{this.props.children}
				</div>
				<span className="sideDrawer-close"></span>
			</div>
		)
	}
}

export default SideDrawer;