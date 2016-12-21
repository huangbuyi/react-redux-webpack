import React from 'react';
import './SideDrawer.css';

const SideDrawer = ({ children, visibility, onHideClick }) => (
	<div
		className={"sideDrawer" + (visibility ? " show": " hide")}>
		<div className="sideDrawer-header"></div>
		<div className="sideDrawer-container">
			{children}
		</div>
		<span onClick={onHideClick} className="sideDrawer-close">关闭</span>
	</div>
)



export default SideDrawer;