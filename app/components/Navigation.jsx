import React from 'react';
import { Link, IndexLink } from 'react-router'
import './Navigation.css';

const NavItem = ({ target, text, onClick }) => (
	target == "/" ?
		<li>
			<IndexLink to={target} activeClassName={"active"}>
				<div onClick={onClick} className="navItem">
					{text}
				</div>
			</IndexLink>
		</li>
		:
		<li>
			<Link to={target} activeClassName={"active"}>
				<div onClick={onClick} className="navItem">
					{text}
				</div>
			</Link>
		</li>
	
)



const Navigation = ({ route, onClick, onMoreClick }) => {
	let links = [
					{target:"/", text:"本期"},
					{target:"/project",text:"项目"},
					{target:"/website",text:"网站"},
					{target:"/source",text:"资源"},
					{target:"/circle",text:"圈子"},
					{target:"/book",text:"图书"}
				];

	return (
		<div className="navigation">
			<ul>
				{links.map(link => 
					<NavItem 
					target={link.target}
					key={link.target} {...link} 
					onClick={() => onClick(link.target) } 
					/>
				)}
			</ul>
			<div onClick={onMoreClick} className="navMoreBtn">更多频道</div>
		</div>
	)
}


/*
class Navigation2 extends React.Component{
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
			<div onClick={this.props.onBtnClick} className="navigation">
				<ul className="navItem">
					{navItems}
				</ul>
			</div>
		)
		
	}
}*/

export default Navigation;