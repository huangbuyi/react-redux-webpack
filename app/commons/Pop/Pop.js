import React from 'react'
import Surface from './Surface'

const positionStyle = {
	position: 'absolute',
	left: 0,
	top: 0,
	zIndex: 999,
	outline: 'none'
}

const containerStyle = {
	position: 'relative'
}

function contains(root, n) {
	var node = n;
	while (node) {
		if (node === root) {
			return true;
		}
		node = node.parentNode;
	}

	return false;
}


class Pop extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: this.props.defaultVisible
		}
		this.onDocumentClick = this.onDocumentClick.bind(this)
	}

	static defaultProps = {
			defaultVisible: false,
			offset: 5,
			placement: 'topLeft'
	}

	onClick () {
		this.setState({
			visible: !this.state.visible
		})
	}

	onDocumentClick (e) {
		var target = e.target
		var root = this.refs.activeEle

		if(!contains(root, target)){
			this.setState({
				visible: false
			})
		}
	}

	componentDidMount() {
		document.addEventListener('click', this.onDocumentClick)
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.onDocumentClick)
	}
	render () {
		var { 
			defaultVisible,
			children,
			offset,
			placement,
			content
		} = this.props
		
		/// top left openX openY
		// 不同 placement 对应的值，依次为 top, left, X展开方向, Y展开方向
		var mapTo = {
			'topLeft':    [0	 , 0	 ,  1, -1],
			'top': 		  [0	 , '50%' ,  0, -1],
			'topRight':   [0	 , '100%', -1, -1],
			'rightTop':   [0	 , '100%',  1,  1],
			'right':      ['50%' , '100%',  1,  0],
			'rightBottom':['100%', '100%',  1, -1],
			'bottomRight':['100%', '100%', -1,  1],
			'bottom':     ['100%', '50%' ,  0,  1],
			'bottomLeft': ['100%', 0	 ,  1,  1],
			'leftBottom': ['100%', 0	 , -1, -1],
			'left': 	  ['50%' , 0	 , -1,  0],
			'leftTop':    [0	 , 0	 , -1,  1],
		}

		var v = mapTo[ placement ]

		// 确定定位位置
		var pStyle = Object.assign({}, positionStyle, {
			top: v[0],
			left: v[1]
		})

		// 确定偏移方向
		var offX = (v[1] == 0 && v[2] == -1) || (v[1] == '100%' &&　v[2] == 1) ? parseInt(offset) : 0
		var offY = offX == 0 ? parseInt(offset) : 0

		return (
			<span style={ containerStyle } ref='activeEle'>
				<span onClick={ this.onClick.bind(this) }>
					{ children }
				</span>
				<div style={ pStyle }>
					<Surface isOpen={ this.state.visible } x={v[2]} y={v[3]} offsetX={offX} offsetY={offY}>
						{ content }
					</Surface>
				</div>
			</span>
		)
	}
}

const placements = ['topLeft', 'top', 'topRight', 'rightTop', 'right', 'rightBottom',
	'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop']
	
Pop.protoTypes = {
	defaultVisible: React.PropTypes.bool,
	children: React.PropTypes.node,
	offset: React.PropTypes.number,
	placement: React.PropTypes.oneOf( placements ),
	content: React.PropTypes.node
}

export default Pop