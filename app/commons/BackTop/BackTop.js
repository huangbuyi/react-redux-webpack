import React from 'react'
import FloatActionButton from '../FloatActionButton'
import BezierEasing from 'bezier-easing'
import backTopIcon from '../SvgIcon/backTop'


class BackTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
		this.onScroll = this.onScroll.bind(this)
		this.onClick = this.onClick.bind(this)
	}

	static defaultProps = {
		height: 1080
	}

	onClick () {
		var easing = BezierEasing(0.4,0,0.2,1)
		var duration = 400
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
	}



	onScroll (e) {
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
		var { onClick, visible, height, ...props } = this.props
		return (
			<div>
				<FloatActionButton 
					onClick={ this.onClick } 
					visible={ this.state.visible }
					icon={ backTopIcon }
					{ ...props }
				/>
			</div>
		)
	}

	componentWillUnmount() {
		document.removeEventListener(this.onScroll)
	}
}

BackTop.proptypes = {
	height: React.PropTypes.number,
	visible: React.PropTypes.bool,
	onClick: React.PropTypes.func
}

export default BackTop