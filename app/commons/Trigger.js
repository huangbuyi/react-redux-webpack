import React from 'react'
import ReactDom from 'react-dom'
import Popup from './Popup'

function noop() {}

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

class Trigger extends React.Component {
	static defaultProps = {
		action: [],
		showAction: [],
		hideAction: [],
		defaultVisible: false,
		mouseEnterDelay: 0,
		mouseLeaveDelay: 0.1,
		onVisibleChange: noop
	}

	constructor(props) {
		super(props);
		this.state = {
			visible: !!this.props.defaultVisible
		}
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeave = this.onMouseLeave.bind(this)
		this.onPopupMouseEnter = this.onPopupMouseEnter.bind(this)
		this.onPopupMouseLeave = this.onPopupMouseLeave.bind(this)
		this.onClick = this.onClick.bind(this)
		this.onDocumentClick = this.onDocumentClick.bind(this)
	}

	onMouseEnter () {
		// fire
		this.delaySetVisible(true, this.props.mouseEnterDelay)
	}

	onMouseLeave () {
		// fire
		this.delaySetVisible(false, this.props.mouseLeaveDelay)
	}

	onPopupMouseEnter () {
		this.clearDelayTimer()
	}

	onPopupMouseLeave (e) {
		// some judge
		this.delaySetVisible(false, this.props.mouseLeaveDelay)
	}

	onClick () {
		// 点击目标为触发元素
		event.preventDefault()
		var nextVisible = !this.state.visible
		if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
			this.setVisible(!this.state.visible)
		}
	}

	onDocumentClick () {
		var {mask, maskClosable} = this.props
		if(mask && !maskClosable){
			return
		}
		var target = event.target
		var root = ReactDom.findDOMNode(this)
		var popupNode = this.getPopupDomNode()

		// 如果点击的目标，不包含触发元素，且不包含 popup 元素
		if (!contains(root, target) && !contains(popupNode, target)) {
      		this.setVisible(false);
   	 	}
	}

	getPopupDomNode () {
		if( this._component ) {
			return this._component.isMounted() ? this._component.getPopupDomNode() : null
		}
		return null
	}

	setVisible ( visible ) {
		
		this.clearDelayTimer()
		if( this.state.visible !== visible ) {
			if( !('visible' in this.props) ) {

				this.setState({
					visible: visible
				})
			}
			this.props.onVisibleChange(visible)
		}
	}

	delaySetVisible (visible, delay) {
		var _this = this
		var delay = delay * 1000
		this.clearDelayTimer()
		if (delay) {
			this.delayTimer = setTimeout( () => {
				_this.setVisible(visible)
				_this.clearDelayTimer()
			}, delay)
		} else {
			this.setVisible(visible)
		}
	}

	clearDelayTimer () {
		if(this.delayTimer) {
			clearTimeout(this.delayTimer)
			this.delayTimer = null
		}
	}

	isClickToShow () {
		var { action, showAction } = this.props
		return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1
	}

	isClickToHide () {
		var { action, hideAction } = this.props
		return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1
	}

	getComponent () {
		var props = this.props,
			state = this.state,
			root = ReactDom.findDOMNode(this)

		return (<Popup
			{...Object.assign({
				visible: state.visible,
				className: 'test',
				action: props.action,
				placement: props.placement,
				offset: props.offset
			},{

			})}
		>
		{ typeof props.popup === 'function' ? props.popup() : props.popup }
		</Popup>)
	}

	getContainer () {
      var popupContainer = document.createElement('div');
      popupContainer.style.width = '100%'
      popupContainer.style.height = '100%'
      /// var mountNode = document.body; 挂载在body上对齐太难搞
      var mountNode = ReactDom.findDOMNode(this)
      mountNode.appendChild(popupContainer)

      return popupContainer
    }

	///
	_renderComponent (ready) {
		// 去掉1，可使得避免首次render时渲染popup，但组件问题先保留1
		if( 1 || this.state.visible || this._component ) {
			if( !this._container ){
				this._container = this.getContainer()
			}
			var component = this.getComponent()
			var _this = this
			ReactDom.unstable_renderSubtreeIntoContainer(this, component, this._container, () => {
				_this._component = this
				if( ready ) {
					ready.call(this)
				}
			})
		}
	}

	render () {
		var { children } = this.props,
			child = React.Children.only(children),
			newChildProps = {};

		if (this.isClickToHide() || this.isClickToShow()) {
			newChildProps.onClick = this.onClick
		}

		return React.cloneElement(child, newChildProps)
	}

	componentDidMount() {
		this.componentDidUpdate({}, {
			visible: this.state.visible
		})
	}

	componentDidUpdate (_, prevState) {
		
		this._renderComponent( ()=> {
			if(prevState.visible !== this.state.visible) {
				// some callback
			}
		})
	}
}

export default Trigger