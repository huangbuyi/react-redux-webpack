import React from 'react';
import './SelectBox.css';

class SelectBox extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			value: this.props.default
		}
	}
	handleOpen (){
		!this.state.isOpen && this.setState({isOpen: true});
	}
	handleClose (){
		this.state.isOpen && this.setState({isOpen: false});
	}
	handleClick (event){
		var value = event.target.getAttribute("data-value"); 
		this.setState({
			isOpen: false,
			value: value
		})
		this.props.onClick && this.props.onClick( value );
	}
	render (){
		var items = []
		var { options, width, left, top } = this.props
		width = width ? width + 'px': '180px'
		left = left ? left + 'px': '-8px'
		top = top ? top + 'px' : '-8px'

		for(var key in options){

			items.push(
				<li className={this.state.value == key ? " selected" : ""} data-value={key} key={key}>{options[key]}</li>
			)
		}

		var height = items.length * 30 + 'px'
		var clsName = "selectBox-options" + (this.state.isOpen ? " selectBox-options-open": " selectBox-options-close");
		var display = this.state.isOpen ? "block" : "none"; 

		return (
			<div className="selectBox">
				<div onClick={this.handleOpen.bind(this)} className="selectBox-btn">{this.props.options[this.state.value]}</div>
				<div style={{ 
					width: this.state.isOpen ? width : 0,
					height: this.state.isOpen ? height : 0,
					left: this.state.isOpen ? left : '37%',
					top: this.state.isOpen ? top : '37%'
				}} className={clsName}>
					<ul onClick={this.handleClick.bind(this)}>
						{items}
					</ul>
				</div>						
				{this.state.isOpen ? <div onClick={this.handleClose.bind(this)} className="selectBox-substrate"></div> : null}			
			</div>
		)
	}
}

export default SelectBox;