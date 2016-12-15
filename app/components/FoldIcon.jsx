import React from 'react';
import './FoldIcon.css';

class FoldIcon extends React.Component {
	
	render () {
		var clsName = "foldIcon" + (this.props.isFold ? " foldIcon-fold" : " foldIcon-unfold");
		var foldColor = {background: this.props.foldColor ? this.props.foldColor : "black"};
		var unfoldColor = {background: this.props.unfoldColor ? this.props.unfoldColor : "black" };
		var color = this.props.isFold ? foldColor : unfoldColor;
		return (
			<div className={ clsName }>
				<span style={color}></span>
				<span style={color}></span>
			</div>
		)
	}
}

export default FoldIcon;