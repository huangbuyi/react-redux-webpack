import React from 'react'
import './RaisedButton.css'

const disableStyle = {
	color: 'rgba(0,0,0,0.26)',
	background: 'rgba(0,0,0,0.26)',
	boxShadow: 'none',
	cursor: 'default'
}
const ableStyle = {
	
}

const RaisedButton = ({children, color="#2196F3", onClick=null, disable=false}) => (
	<div onClick={ disable ? null : onClick } 
		style={ disable ? disableStyle : Object.assign({background: color}, ableStyle) }
		className="myRaisedButton"
	>
		{ children }
	</div>
)

export default RaisedButton