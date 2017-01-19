import React from 'react'
import Button from '../Button/Button'

const defStyle = {
	border: 'none',
	outline: 'none',
	padding: '0 16px',
	minWidth: '88px',
	height: '36px',
	fontSize: '14px',
	fontWeight: 500,
	transition: 'all 420ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}

const disabledStyle = Object.assign({}, defStyle, {
	cursor: 'default',
	backgroundColor: 'rgba(0,0,0,0)',
	color: 'rgba(0,0,0,0.3)'
})


const themeStyle = {
	light: {
		backgroundColor: 'rgba(0,0,0,0)',
		color: 'rgba(0,0,0,0.87)',
		hoverColor: 'rgba(153,153,153,0.2)',
		rippleColor: 'rgba(153,153,153,0.28)'
	},
	colour: {
		backgroundColor: '#2196F3',
		color: '#FFF',
		hoverColor: '#42B1FF',
		rippleColor: 'rgba(255,255,255,0.18)'
	}

}

class FlatButton extends React.Component {

	getStyle () {
		var { backgroundColor, color, theme } = this.props

		return Object.assign({}, defStyle, {
			backgroundColor: backgroundColor ? backgroundColor : themeStyle[theme].backgroundColor,
			color: color ? color : themeStyle[theme].color 
		})
	}

	getHoverStyle () {
		var { hoverColor, theme } = this.props

		return Object.assign({}, {
			backgroundColor: hoverColor ? hoverColor : themeStyle[theme].hoverColor 
		})
	}

	getRippleColor () {
		var { rippleColor, theme } = this.props
		return rippleColor ? rippleColor : themeStyle[theme].rippleColor
	}

	getIcon () {
		var { icon, color, theme } = this.props,
			props = {
				style: {
					float: 'left',
					height: '36px',
					margin: '0 8px 0 0'
				},
				color: color ? color : themeStyle[theme].color
			}

		return icon ? React.createElement(icon, props) : null		
	}

	getChildren () {
		var { children } = this.props
		return (
			<div>
				{ this.getIcon() }
				<div style={{float:'left',height:'36px',lineHeight:'36px'}}>{ children }</div>
			</div>
		)
	}

	render () {
		var props = this.props
		var { ...p } = {
			style: this.getStyle(),
			hoverStyle: this.getHoverStyle(),
			onClick: this.onClick,
			rippleColor: this.getRippleColor(),
			disabled: props.disabled,
			disabledStyle: disabledStyle
		}

		return (
			<Button { ...p } >
				{ this.getChildren() }
			</Button>
		)
	}
}

///
FlatButton.defaultProps = {
	disabled: false,
	theme: 'light'
}

FlatButton.proptypes = {
	disabled: React.PropTypes.bool,
	backgroundColor: React.PropTypes.string,
	color: React.PropTypes.string,
	hoverColor: React.PropTypes.string,
	theme: React.PropTypes.oneOf(['light', 'colour']),
	rippleColor: React.PropTypes.string,
	onClick: React.PropTypes.func,
	icon: React.PropTypes.node 
}

export default FlatButton