import React from 'react'
import './Button.css'

const delay = 22650

const defStyle = {
	position: 'relative',
	cursor: 'pointer',
	fontFamily: 'Roboto, Nono, sans-serif',
	fontSize: '14px',
	padding: '7px 16px',
	color: 'rgba(0,0,0,0.87)',
	overflow: 'hidden',
	// required for bug width transfrom:scale and overflow:hidden in chrome, http://stackoverflow.com/questions/16687023/bug-with-transform-scale-and-overflow-hidden-in-chrome
	zIndex: '1'	
}

const innerStyle = {
	position: 'absolute',
	width: '100%',
	height: '100%',
	left: 0,
	top: 0,
	zIndex: 1
}

function getLength(x1, y1, x2, y2) {
	var w = x1 - x2,
		h = y1 - y2
	return Math.sqrt( w * w + h * h )
}

function getMaxLengthToRect(w, h, x, y) {
	return Math.max( 
		getLength(0, 0, x, y),
		getLength(w, 0, x, y),
		getLength(w, h, x, y),
		getLength(0, h, x, y)
	)
}


class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			hover: false
		}

		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
	}

	static defaultProps = {
		disabled: false,
		htmlType: 'button',
		rippleColor: 'rgba(153,153,153,0.28)'
	}

	onMouseEnter () {
		this.setState({
			hover: true
		})
	}

	onMouseLeave () {
		this.setState({
			hover: false,
		})
	}

	onMouseDown ( e ) {
		var e = e.nativeEvent
		this.setState({
			active: true
		})
		this.pushRipple( e.offsetX, e.offsetY )
	}

	onMouseUp () {
		this.setState({
			active: false
		})
		this.shiftRipple()
	}

	pushRipple (x, y) {
		var ripple = document.createElement('span'),
			button = this.refs.button,
			w = button.offsetWidth,
			h = button.offsetHeight,
			r = getMaxLengthToRect(w, h, x, y),
			{ rippleColor } = this.props

		ripple.className = 'ripple-expading',
		ripple.style.position = 'absolute',
		ripple.style.zIndex = '0',
		ripple.style.left = x - r + 'px'
		ripple.style.top = y - r + 'px'
		ripple.style.width = ripple.style.height = 2 * r + 'px'
		ripple.style.borderRadius = r + 'px'
		ripple.style.backgroundColor = rippleColor
		button.appendChild( ripple )
		this.ripple = ripple
	}

	shiftRipple () {
		this.ripple.style.transition = 'opacity 650ms cubic-bezier(0.0, 0.0, 1, 1)'
		this.ripple.style.opacity = 0
		var ripple = this.ripple
		setTimeout( () => {
			this.refs.button.removeChild( ripple )
		}, delay)
	}


	// /
	getStyle () {
		var state = this.state 
		var { style, disabled, activeStyle, hoverStyle, disabledStyle } = this.props

		if( disabled ) {
			return Object.assign({}, defStyle, disabledStyle)
		}
		if( activeStyle && state.active ) {
			return Object.assign({}, defStyle, style, hoverStyle, activeStyle)
		}
		if( !(activeStyle && state.active) && state.hover ) {
			return Object.assign({}, defStyle, style, hoverStyle)
		}
		return Object.assign({}, defStyle, style)
	}


	setHover ( hover ) {
		this.setState({
			hover: hover
		})
	}


	render () {
		var props = this.props
		var { ...p } = {
			style: this.getStyle(),
			onClick: props.disabled ? null : props.onClick,
			tabIndex: props.disabled ? -1 : null,
			type: props.htmlType,
			onMouseEnter: props.hoverStyle ? this.onMouseEnter : null,
			onMouseLeave: props.hoverStyle ? this.onMouseLeave : null,
			onMouseDown: props.disabled ? null : this.onMouseDown,
			onMouseUp: props.disabled ? null : this.onMouseUp,
			ref: 'button'
		}

		return (
			<button { ...p }>
				<div style={ innerStyle }></div>
				{ props.children }
			</button>
		)
	}

	componentWillUnmount() {
		this.ripple = null
	}
}


///

const btnTypes = ['button', 'submit', 'reset', 'menu']

Button.proptypes = {
	disabled: React.PropTypes.bool,
	children: React.PropTypes.node,
	onClick: React.PropTypes.func.isRequired,
	htmlType: React.PropTypes.oneOf(btnTypes),
	style: React.PropTypes.object,
	hoverStyle: React.PropTypes.object,
	activeStyle: React.PropTypes.object,
	disabledStyle: React.PropTypes.object
}

export default Button