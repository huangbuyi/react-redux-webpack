import React from 'react'
import Pop from '../Pop'

class PopCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	handleClick () {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	handleClose () {
		this.setState({
			isOpen: false
		})
	}

	render () {
		var { 
			title,
			style, 
			headerStyle, 
			bodyStyle,
			content,
			children,
			...props
		} = this.props

		style = Object.assign(defStyle, style)
		headerStyle = Object.assign({}, defHeaderStyle, headerStyle)
		bodyStyle = Object.assign({}, defBodyStyle, bodyStyle) 

		const cardContent = (
			<div style={ style }>
				<div style={ headerStyle }>
					{ title }
				</div>
				<div style={ bodyStyle }>
					{ content }
				</div>
			</div>
		)


		return (
			<Pop content={ cardContent } {...props}>{ children }</Pop>
		)
	}
}

///
PopCard.defaultProps = {
	title: '无标题',
	style: {},
	headerStyle: {},
	bodyStyle: {}
}

PopCard.proptypes = {
	title: React.PropTypes.node,
	style: React.PropTypes.object,
	headerStyle: React.PropTypes.object,
	bodyStyle: React.PropTypes.object,
	content: React.PropTypes.node,
	children: React.PropTypes.node
}

const defStyle = {
	position: 'relative',
	width: 300
}

const defHeaderStyle = {
	boxSizing: 'border-box',
	display: 'block',
	fontSize: '16px',
	padding: '16px 12px 12px 12px',
	color: '#FFFFFF',
	background: '#2196F3'
}

const defBodyStyle = {
	boxSizing: 'border-box',
	display: 'block',
	fontSize: '13px',
	lineHeight: '20px',
	padding: '12px',
	color: '#000000',
	background: '#FFFFFF'
}

export default PopCard