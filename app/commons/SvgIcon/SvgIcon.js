import React from 'react'

class SvgIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		}
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
	}

	static defaultProps = {
		style: {},
		viewBox: '0 0 24 24'
	}

	onMouseEnter () {
		this.setState({hovered: true})
	}

	onMouseLeave () {
		this.setState({hovered: false})
	}

	getStyle () {
		var props = this.props,
			state = this.state

		props.style['fill'] = state.hovered && props.hoverColor ? props.hoverColor : undefined
		return Object.assign({
			display: 'inline-block',
			color: 'rgba(0,0,0,0.87)',
			fill: 'rgba(0,0,0,0.87)',
			width: '24px',
			height: '24px',
			transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
			userSelect: 'none',
			transformOrigin: '50% 50% 0px'	// 居中
		}, props.style)
	}

	render () {
		var props = this.props,
		 	state = this.state,
			{ ..._props } = {
			fill: props.color,
			style: this.getStyle(),
			viewBox: props.viewBox,
			onMouseEnter: this.onMouseEnter,
			onMouseLeave: this.onMouseLeave
		}

		return (
			<svg {..._props}>
				{ props.children }
			</svg>
		)
	}
}

export default SvgIcon