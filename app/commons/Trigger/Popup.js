import React from 'react'
import Pop from './Pop'


class Popup extends React.Component {

	getPopupDomNode () {
		return ReactDom.findDOMNode(this)
	}

	getPopupElement () {
		var { visible, children, ...props } = this.props
		var a = visible ? (<Animate key={1} {...props}>{ children }</Animate>) : null
		console.log(a)
		return  a
		
	}

	///
	render () {
		var { visible, children, ...props } = this.props 
		
		return (
			<Pop visible={ visible } {...props}>
			{ children }
			</Pop>
		)
	}
} 

export default Popup