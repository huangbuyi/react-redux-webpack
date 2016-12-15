import React from 'react';
import ContentEditable from './ContentEditable.jsx';
import './CommentBox.css';

// todo 滚动距离短，滚动条长；滚动距离长，滚动条短
// todo 当评论超过窗口长度，出现“没有啦，返回顶部”字样，点击返回顶部
// todo 完成tooltip提示框
// todo 添加enter提交事件

class CommentBoxHeader extends React.Component {
	handleClick () {
		window.open(this.props.url);
	}
	render () {
		var url = this.props.url;

		url = url.indexOf("//") > -1 ? url.split("//")[1] : url;
		url = url.indexOf("/") > -1 ? url.split("/")[0] : url;

		return (
			<div onClick={this.handleClick.bind(this)} className="commentBoxHeader">
				<h1 title={"前往" + url}>{url}</h1>
			</div>
		)		
	}
} 

class CommentBoxSubheader extends React.Component {
	render (){
		return (
			<div className="commentBoxSubheader">
				<h2 className="commentBoxSubheader-name">{ this.props.data.title }</h2>
				<p className="commentBoxSubheader-description">{ this.props.data.description }</p>	
				<span className="commentBoxSubheader-ip" title="网站日均IP">{ this.props.data.ip }</span>		
			</div>
		)		
	}
} 


class CommentItem extends React.Component {
	render (){
		return (
			<div className="commentItem">
				<div className="commentItem-portrait">
					<img />
				</div>
				<div className="commentItem-content">
					<h3>{this.props.data.user}</h3>
					<p>{this.props.data.text}</p>
					<div className="commentItem-bottom"><span>{this.props.data.time}</span></div>
				</div>
			</div>
		)		
	}
} 

class CommentList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			scrollBarTop: 0
		}
		
	}

	handleScroll (event){
		var top = 410 * event.target.scrollTop / (event.target.scrollHeight - 470);
		var sBar = this.refs.scrollBar;
		var that = this;
		var hideClass = " scrollBar-hide";
		var showClass = " scrollBar-show";
		sBar.style.top = top + 'px';
		//sBar.style.opacity = 1;
		if( sBar.className.indexOf(hideClass) ){
			sBar.className = sBar.className.replace(hideClass, "")
		}
		if( sBar.className.indexOf(showClass) == -1 ){
			sBar.className += showClass;
		}

			

		this.timer && clearTimeout(this.timer);

		this.timer = setTimeout(function() {
			sBar.className = sBar.className.replace(showClass, hideClass);
		}, 200);
	}

	render (){
		var comments = [];
		for(var i = 0, len = this.props.data.length; i < len; i++){
			comments.push(
				<CommentItem key={i} data={this.props.data[i]} />
			)
		}

		return (
			<div onScroll={this.handleScroll.bind(this)} className="commentList">
				<div className="commentList-hideScroll">
					<CommentBoxSubheader data={this.props.headerData} />
					{comments}
				</div>
				<span ref="scrollBar" className="commentBox-scrollBar"></span>
			</div>
		)		

	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
} 

class CommentForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReset: false,
			hasInput: false
		}
	}

	handleChange (event){
		if( !this.state.hasInput && event.target.value.length > 0 ){
			this.setState({hasInput: true});
		}
		if( this.state.hasInput && event.target.value.length === 0 ){
			this.setState({hasInput: false});
		}
		console.log(event.target.value);
	}

	handleSubmit (){
		this.setState({isReset: true});
	}

	handleReset (){
		this.setState({isReset: false});
	}
	render (){
		"width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
		var iconStyle = {
			color: this.state.hasInput ? "#FFFFFF" : "#2196F3"
		}
		var btnStyle = {
			background: this.state.hasInput ? "#2196F3" : "#CCCCCC"
		}

		return (
			<div className="commentForm">
				<ContentEditable className="commentForm-input" data-text="添加评论" onChange={this.handleChange.bind(this)} 
				isReset={this.state.isReset} onReset={this.handleReset.bind(this)}/>
				<button style={btnStyle} onClick={this.handleSubmit.bind(this)} className="commentForm-submit">
					<svg className="commentForm-submitIcon" style={iconStyle} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M915.515273 142.819385 98.213046 458.199122c-46.058539 17.772838-44.90475 43.601756 2.348455 57.622994l197.477685 58.594874 80.292024 238.91085c10.51184 31.277988 37.972822 37.873693 61.462483 14.603752l103.584447-102.611545 204.475018 149.840224c26.565749 19.467242 53.878547 9.222132 61.049613-23.090076l149.210699-672.34491C965.264096 147.505054 946.218922 130.971848 915.515273 142.819385zM791.141174 294.834331l-348.61988 310.610267c-6.268679 5.58499-11.941557 16.652774-12.812263 24.846818l-15.390659 144.697741c-1.728128 16.24808-7.330491 16.918483-12.497501 1.344894l-67.457277-203.338603c-2.638691-7.954906 0.975968-17.705389 8.022355-21.931178l442.114555-265.181253C812.67481 268.984974 815.674251 272.975713 791.141174 294.834331z"></path></svg>
				</button>
				<div className="commentForm-tooltip">
					<span>提示信息</span>
				</div>	
			</div>
		)		
	}
} 



class CommentBox extends React.Component {
	
	render () {
		return (
			<div className="commentBox">
				<CommentBoxHeader url={this.props.headerData.url}/>
				<CommentList data={this.props.comments} headerData={this.props.headerData}/>
				<CommentForm />
			</div>
		)
		
	}
}

export default CommentBox;