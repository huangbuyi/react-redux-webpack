import React from 'react';
import './Webbox.css';
import FoldIcon from './FoldIcon.jsx';

class WebboxHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	handleClick () {
	 	this.props.stateChange(0);
	}

	render () {
		var style = {
			background: "#FFFFFF",
			color: "#2196F3",
			borderBottom: "1px solid #F0F0F0"
		}

		return (
			<div style={this.props.boxState == 0 ? style : {}} onClick={this.handleClick.bind(this)} className="webboxHeader">
				<a><h1 className="webboxHeader-cate">{this.props.title}</h1></a>
				<div className="webboxHeader-foldIcon">
					<FoldIcon foldColor="#2196F3" unfoldColor="#FFFFFF" isFold={this.props.boxState == 0}/>
				</div>
			</div>
		)
	}
}

class WebList extends React.Component {
	render () {
		var items = [];
		var itemHeight = 64;


		this.props.data.map( function(item){
			items.push( <WebItem key={item.id} data={item}/> );
		} )
		return (
			<div className="webList" style={ {height: 64 * items.length + 'px'} }>
					{ items }
			</div>
		)
	}
}

class WebItem extends React.Component {

	handleClick () {
		window.open( this.props.data.url )
	}

	render () {

		return (
			<div onClick={ this.handleClick.bind(this) } className="webItem">
				<h2 className="webItem-name">{ this.props.data.title }</h2>
				<p className="webItem-description">{ this.props.data.description }</p>
				<div className="webItem-more">
					<a className="webItem-comment" href="">{ this.props.data.comment } 评论</a>
					<span title="网站日均IP">{ this.props.data.ip }</span>
				</div>
			</div>
		)
	}
}


class WebboxFooter extends React.Component {
	constructor (props) {
		super(props);
	}

	handleClick () {
	 	this.props.stateChange(1);
	}

	render () {
		var clsName = "webboxFooter" + (this.props.boxState != 2 ? " webboxFooter-active": " webboxFooter-disable")
		return (
			<div onClick={ this.handleClick.bind(this) } className={clsName}>
				{['SHOW','MORE','NO-MORE'][this.props.boxState]}
			</div>
		)
	}
}




class Webbox extends React.Component {
	constructor ( props ) {
		super(props);
		this.state = {
			boxState: this.props.data.length < 5 ? 2 : 1,
			limit: this.props.data.length < 5 ? this.props.data.length : 5 
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextState == this.state){
			return false;
		}
		return true;
	}
	
	handleStateChange ( where ) {
		var nextState;
		var currState = this.state.boxState;
		var limit = this.state.limit;
		if( where == 0 ){
			nextState = [1,0,0][currState];
		}
		if( where == 1 ){
			nextState = [1,1,2][currState];
		}
		if( nextState == 0 ) {
			limit = 0;
		}
		if( nextState == 1 ){
			limit += 5;
			if( limit > this.props.data.length ){
				limit = this.props.data.length;
				nextState = 2;
			}
		}

		if( nextState != currState ){
			this.setState( {boxState: nextState} );
		}
		if( limit != this.state.limit ){
			this.setState( {limit: limit} );
		}
	}

	render () {
		
		return (
			<div className="webbox-holder">
				<div className="webbox">
					<WebboxHeader title={this.props.title} boxState={ this.state.boxState } stateChange={ this.handleStateChange.bind(this) }/>
					<WebList data={this.props.data.slice(0, this.state.limit)}/>
					<WebboxFooter boxState={ this.state.boxState } stateChange={ this.handleStateChange.bind(this) }/>
				</div>
			</div>
		)
	}

	componentDidUpdate(prevProps, prevState) {

		this.props.onStateChange && this.props.onStateChange();
	}
}

export default Webbox;