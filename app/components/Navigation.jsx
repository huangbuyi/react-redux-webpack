import React from 'react';
import { Link } from 'react-router';
import './Navigation.css';

class Navigation extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			nav: this.props.links[this.props.nav] ? this.props.nav : "/web"
		}
	}

	static defaultProps = {
		links: {"/web":"网址导航","/source":"资源合集","/route":"职业路径"},
	}
	
	handleClick (event){

		this.setState({nav: event.target.getAttribute("data-item")});
		this.props.onClick && this.props.onClick(event.target.getAttribute("data-item"));
	}

	render (){
		var navItems = [];
		var navNames = this.props.navNames;
		var links = this.props.links;
		var that = this;
		for(var key in links){
		
			navItems.push(
				<li key={key}><Link onClick={that.handleClick.bind(that)} data-item={key} 
				className={that.state.nav == key ? "selected": ""} to={key}>{links[key]}</Link></li>
			)
		}

		return (
			<div className="navigation">
				<ul className="navItem">
					{navItems}
				</ul>
			</div>
		)
		
	}
}

export default Navigation;