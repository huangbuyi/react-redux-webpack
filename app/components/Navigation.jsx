import React from 'react';
import PastWeeklyCon from '../containers/PastWeeklyCon'
import { Link, IndexLink } from 'react-router'
import './Navigation.css';

const NavItem = ({ target, text, onClick }) => (
	<li className='navLi'>
	{
		target == "/" ?	
			<IndexLink to={target} activeClassName={"active"}>
				<div onClick={onClick} className="navItem">
					{text}
				</div>
			</IndexLink>
			:
			<Link to={target} activeClassName={"active"}>
				<div onClick={onClick} className="navItem">
					{text}
				</div>
			</Link>
	}
	</li>
	
)



const Navigation = ({ router, onClick }) => {

	let links = [
					{target:"/", text:"本期"},
					{target:"/topic",text:"TOPIC"},
					{target:"/website",text:"网站"},
					{target:"/source",text:"资源"},
					{target:"/circle",text:"圈子"},
					{target:"/book",text:"图书"},
					{target:"/other",text:"其它"}
				];

	return (
		<div className="navigation">
			<div className="navigation-inner">
				<ul>
					{links.map(link => 
						<NavItem 
						target={link.target}
						key={link.target} {...link} 
						onClick={() => onClick(link.target) } 
						/>
					)}
				</ul>
				<div className="navMoreBtn">
					<PastWeeklyCon router={ router }/>
				</div>
			</div>
		</div>
	)
}


export default Navigation;