import React from 'react'
import Button from './Button'
import Plus from '../SvgIcon/plus'
import Write from '../SvgIcon/write'

const defStyle = {
	border: 'none',
	outline: 'none',
	padding: '0',
	width: '56px',
	height: '56px',
	lineHeight: '56px',
	borderRadius:'28px',
	fontSize: '14px',
	fontWeight: 500,
	transition: 'all 420ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
	boxShadow: 'rgba(0, 0, 0, 0.157) 0px 3px 10px, rgba(0, 0, 0, 0.227) 0px 3px 10px',
}

const disabledStyle = Object.assign({}, defStyle, {
	backgroundColor: 'rgb(229,229,229)',
	boxShadow: 'none',
	cursor: 'default',
	color: 'rgba(0,0,0,0.3)'
})

const activeStyle = {
	boxShadow: 'rgba(0, 0, 0, 0.188) 0px 10px 30px, rgba(0, 0, 0, 0.227) 0px 6px 10px'
}


const themeStyle = {
	light: {
		backgroundColor: '#FFF',
		color: 'rgba(0,0,0,0.87)',
		hoverColor: '#EBEBEB',
		rippleColor: 'rgba(153,153,153,0.28)'
	},
	colour: {
		backgroundColor: '#2196F3',
		color: '#FFF',
		hoverColor: '#42B1FF',
		rippleColor: 'rgba(255,255,255,0.18)'
	}

}

class FloadActionButton extends React.Component {
	static defaultProps = {
		disabled: false,
		theme: 'light'
	}

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

	getChildren () {
		var { children, disabled, icon } = this.props
		if ( icon ) {
			return React.createElement(icon, {
				color: disabled ? 'rgba(0,0,0,0.3)' : '#ffffff',
				style: { height:'56px', lineHeight:'56px' }
			})
		}
		return children ? children : 
			<Write color={disabled ? 'rgba(0,0,0,0.3)' : '#ffffff'} style={{height:'56px', lineHeight:'56px'}}/>
	}

	render () {
		var props = this.props
		var { ...p } = {
			style: this.getStyle(),
			hoverStyle: this.getHoverStyle(),
			activeStyle: activeStyle,
			onClick: props.onClick,
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
FloadActionButton.proptypes = {
	icon: React.PropTypes.node,
	disabled: React.PropTypes.bool,
	backgroundColor: React.PropTypes.string,
	color: React.PropTypes.string,
	hoverColor: React.PropTypes.string,
	theme: React.PropTypes.oneOf(['light', 'colour']),
	rippleColor: React.PropTypes.string,
	onClick: React.PropTypes.func 
}

export default FloadActionButton