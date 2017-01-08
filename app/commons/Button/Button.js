import React from 'react'
import './Button.css'

const delay = 1000

const defStyle = {
	position: 'relative',
	cursor: 'pointer',
	fontFamily: 'Roboto, Nono, sans-serif',
	fontSize: '14px',
	padding: '7px 16px',
	color: 'rgba(0,0,0,0.87)'
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
		disable: false,
		htmlType: 'button'
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

	onMouseDown () {
		this.setState({
			active: true
		})
		this.pushRipple()
	}

	onMouseUp () {
		this.setState({
			active: false
		})
		this.shiftRipple()
	}

	pushRipple () {
		var ripple = document.createElement('span')
		ripple.className = 'ripple-expading'
		this.refs.button.appendChild( ripple )
		this.ripple = ripple
	}

	shiftRipple () {
		this.ripple.className = 'ripple-expading ripple-fading'
		var ripple = this.ripple
		setTimeout( () => {
			this.refs.button.removeChild( ripple )
		}, delay)
	}


	// /
	getStyle () {
		var state = this.state 
		var { style, disable, activeStyle, hoverStyle, disableStyle } = this.props

		if( disable ) {
			return Object.assign({}, defStyle, defDisableStyle, style, disableStyle)
		}
		if( activeStyle && state.active ) {
			return Object.assign({}, defStyle, style, activeStyle)
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
			onClick: props.disable ? null : props.onClick,
			tabIndex: props.disable ? -1 : null,
			type: props.htmlType,
			onMouseEnter: props.hoverStyle ? this.onMouseEnter : null,
			onMouseLeave: props.hoverStyle ? this.onMouseLeave : null,
			onMouseDown: this.onMouseDown,
			onMouseUp: this.onMouseUp,
			ref: 'button'
		}

		return (
			<button { ...p }>
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
	disable: React.PropTypes.bool,
	children: React.PropTypes.node,
	onClick: React.PropTypes.func.isRequired,
	htmlType: React.PropTypes.oneOf(btnTypes),
	style: React.PropTypes.object,
	hoverStyle: React.PropTypes.object,
	activeStyle: React.PropTypes.object,
	disableStyle: React.PropTypes.object
}

export default Button