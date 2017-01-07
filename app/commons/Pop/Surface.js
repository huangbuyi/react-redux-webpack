import React from 'react'

/*******************
	Material surface with open and close animation
	Props     Type    Description											 Default
	@isOpen   Bool    component's this.state.								 false
	@x 		  Number  open direction on x-axis, >0 right, =0 fixed, <0 left  1
	@y 		  Number  open direction on y-axis, >0 bottom, =0 fixed, <0 up   1
	@offsetX  Number  offset on x-axis between open and close Surface        0  
	@offsetY  Number  offset on y-axis between open and close surface        0

*********************/


const style = {
	display: 'inline-block',
	position: 'absolute',
	overflow: 'hidden'
}


const openTransition =  `width 280ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
						height 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms,
						box-shadow 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
						opacity 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,`

const closeTransition = `width 325ms cubic-bezier(0.4, 0.0, 0.2, 1) 50ms,
						height 325ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
						box-shadow 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
						opacity 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,`						


const upTransition = `left 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
					right 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
					bottom 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms,
					top 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms`

const downTransition = `left 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms,
						right 340ms cubic-bezier(0.4, 0.0, 0.2, 1) 35ms,
						bottom 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms,
						top 275ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms`

var openStyle = {}
var closeStyle = {
	width: '0',
	height: '0',
	boxShadow: `0 0 0 rgba(0, 0, 0, 0), 
			 	0 0 0 rgba(0, 0, 0, 0)`,
}

class Surface extends React.Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		isOpen: false
	}



	componentWillUpdate(nextProps, nextState) {
		var { x = 1, y = 1, offsetX = 0, offsetY = 0 } = this.props
		var { offsetWidth, offsetHeight }  = this.refs.container

		openStyle = {
			width: offsetWidth,
			height: offsetHeight,
			opacity: 1,
			boxShadow: `0 3px 12px rgba(0, 0, 0, 0.23), 
			 			0 3px 12px rgba(0, 0, 0, 0.16)`,

			top: y > 0 ? offsetY : null,
			right: x < 0 ? offsetX : null,
			bottom: y < 0 ? offsetY : null,
			left: x > 0 ? offsetX : null,
			marginLeft: x == 0 ? -offsetWidth / 2 : null,
			marginTop: y == 0 ? -offsetHeight / 2 : null,
			transition: openTransition + ( y * offsetY >= 0 ? downTransition : upTransition ) 
		}

		closeStyle = {
			width: x == 0 ? offsetWidth : 0,
			height: y == 0 ? offsetHeight : 0,
			opacity: 0,
			boxShadow: `0 0 0 rgba(0, 0, 0, 0), 
			 			0 0 0 rgba(0, 0, 0, 0)`,
			top: y > 0 ? 0 : null,
			right: x < 0 ? 0 : null,
			bottom: y < 0 ? 0 : null,
			left: x > 0 ? 0 : null,
			marginLeft: x == 0 ? -offsetWidth / 2 : null,
			marginTop: y == 0 ? -offsetHeight / 2 : null,
			transition: closeTransition + ( y * offsetY >= 0 ? upTransition : downTransition ) 
		}
	}

	render () {
		var { children, isOpen } = this.props
		return (
			<div style={ isOpen ? Object.assign({}, openStyle, style) :
				Object.assign({}, closeStyle, style) }>
				<div ref='container' style={style}>
					{ children }
				</div>
			</div>
		)
	}

	componentDidMount() {
		// 渲染第二次以获取子组件宽高
		this.forceUpdate()
	}
}

Surface.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	x: React.PropTypes.number,
	y: React.PropTypes.number,
	offsetX: React.PropTypes.number,
	offsetY: React.PropTypes.number
}


export default Surface
