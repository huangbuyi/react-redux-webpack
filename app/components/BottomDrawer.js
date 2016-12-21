import React from 'react'
import './BottomDrawer.css'

const BottomDrawer = ({children, visibility, onHideClick }) => (
	<div 
		style={ {top: visibility ? "121px" : window.clientHeight} }
		className={"bottomDrawer" + (visibility ? " show" : "hide")}
	>
		{children}
	</div>
)



export default BottomDrawer
