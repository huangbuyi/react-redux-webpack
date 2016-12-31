import React from 'react';
import SelectBox from './SelectBox.jsx';
import './SearchBox.css';

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEmpty: true,
			engine: "Baidu"
		}
	}

	static defaultProps = {
    	options: {
			"Baidu":"百度",
			"Google":"Google",
			"Bind":"必应",
			"Github":"Github",
			"StackOverflow":"StackOverflow23333333333333"
		},
		engines: {
			"Baidu":"https://www.baidu.com/s?wd=",
			"Google":"https://www.google.com/#q=",
			"Bind":"https://www.bing.com/search?q=",
			"Github":"https://github.com/search?q=",
			"StackOverflow":"http://stackoverflow.com/search?q="
		}
  	}

	handleChange (event) {
		var value = event.target.value;
		if(this.state.isEmpty && value.length > 0){
			this.setState({
				isEmpty: false
			})
		}
		if(!this.state.isEmpty && value.length === 0){
			this.setState({
				isEmpty: true
			})
		}
	}

	handleSubmit () {
		window.open(this.props.engines[this.state.engine] + encodeURI(this.refs.input.value));
		this.clear();
	}

	handleKeyDown (event) {
		if( event.keyCode === 13 ){
			this.handleSubmit();
		}
	}

	clear () {
		this.refs.input.value = "";
		this.setState({
			isEmpty: true
		})
	}

	handleEngineChange (engine) {
		this.setState({engine: engine});
	}

	render () {

		return (
			<div className="searchBox">
				<input ref="input" onKeyDown={this.handleKeyDown.bind(this)}
				onChange={this.handleChange.bind(this)} placeholder="Search" className="searchBox-input" type="text" />
				<div className="searchBox-engine">
					<SelectBox default={this.state.engine} onClick={this.handleEngineChange.bind(this)} options={this.props.options}/>
				</div>			
				<button onClick={this.handleSubmit.bind(this)} className="searchBox-submit">
					<svg fill="#2196F3" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
   						 <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
   						 <path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</button>
				{ this.state.isEmpty ? null :
				<div onClick={this.clear.bind(this)} className="searchBox-clear">
					<svg className="searchBox-clearIcon" fill="#999999" height="18" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
	   					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
	   					<path d="M0 0h24v24H0z" fill="none"/>
					</svg>
				</div>
				}
			</div>
		)
	}
}

export default SearchBox;