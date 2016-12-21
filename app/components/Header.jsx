import React from 'react'
import { Link } from 'react-router'
import SearchBox from './SearchBox.jsx'
import './Header.css'


class Header extends React.Component {
	render (){
		return (
			<div className="header">
				<div className="header-logo">
					<Link to="/">
						<h1>WEBBEAR</h1><h1>|</h1><h1>前端</h1><span>DEMO-0.0.1</span>
					</Link>
				</div>
				<div className="header-search">
					<SearchBox />
				</div>
			</div>
		)
		
	}
}

export default Header;