import React from 'react'
import FloatActionButton from '../FloatActionButton'
import BezierEasing from 'bezier-easing'
import backTopIcon from '../SvgIcon/backTop'


class BackTop extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
		this.onScroll = this.onScroll.bind(this)
		this.onClick = this.onClick.bind(this)
	}

	onClick () {
		var { cubicBezier, duration, onClick } = this.props
		var [ ...p ] = cubicBezier 
		var easing = BezierEasing( ...p )
		var distance = document.body.scrollTop - 0
		var t = 0
		var _this = this
		if( this.timer ) {
			clearTimeout( this.timer )
		}
		setScroll()

		function setScroll () {
			t += 20

			if( t >= duration ) {
				document.body.scrollTop = 0
				return 
			} else {
				document.body.scrollTop = distance * ( 1 - easing(t / duration) )
			}

			_this.timer = setTimeout(setScroll, 20)
		}

		onClick && onClick()
	}


	// todo 改造获取dom方式为一次性的
	onScroll () {
		var { height } = this.props
		var scrollTop = 0
		if ( document.body ) {
			scrollTop = document.body.scrollTop
		} else {
			scrollTop = document.getElementsByTagName('body')[0].scrollTop
		}
		this.setVisibility( scrollTop >= height )
	}

	setVisibility ( newV ) {
		var oldV = this.state.visible
		if( oldV !== newV ){
			this.setState({
				visible: newV
			})
		}

	}

	componentDidMount() {
		document.addEventListener('scroll', this.onScroll)
	}

	render () {
		var { visible, fixedStyle, icon } = this.props,
			state = this.state,
			{ ...props } = Object.assign({}, this.props, {
				onClick: this.onClick,
				visible: visible ? visible : state.visible,
				icon: icon ? icon : backTopIcon
			})

		return (
			<div style={ fixedStyle ? fixedStyle : defFixedStyle }>
				<FloatActionButton { ...props }/>
			</div>
		)
	}

	componentWillUnmount() {
		document.removeEventListener(this.onScroll)
		clearTimeout(this.timer)
	}
}

BackTop.defaultProps = {
	height: 1080,
	cubicBezier: [0.4,0,0.2,1],
	duration: 400
}

BackTop.proptypes = {
	height: React.PropTypes.number,
	visible: React.PropTypes.bool,
	onClick: React.PropTypes.func,
	duration: React.PropTypes.number,
	cubicBezier: React.PropTypes.array,
	fixedStyle: React.PropTypes.object
}

const defFixedStyle = {
	position:'fixed',
	right:'50px',
	bottom:'50px'
}

export default BackTop