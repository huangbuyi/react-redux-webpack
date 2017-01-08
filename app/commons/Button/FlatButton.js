import React from 'react'
import Button from './Button'

const style = {
	background: 'rgba(0,0,0,0)',
	border: 'none',
	outline: 'none',
	padding: '0 16px',
	minWidth: '88px',
	height: '36px',
	fontSize: '14px',
	fontWeight: 500,
	transition: 'all 420ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}

const hoverStyle = {
	background: 'rgba(153,153,153,0.2)'
}

class FlatButton extends React.Component {
	
	onClick () {
		
	}

	render () {

		return (
			<Button style={style} hoverStyle={hoverStyle} onClick={ this.onClick }>DEFAULT</Button>
		)
	}
}

export default FlatButton