// todo 尽量全部使用内联样式
// todo 将通用样式打包，例如主题颜色、规范颜色

import React from 'react'
import Header from './Header.jsx'
import Navigation from '../containers/NavigationCon'
import SideDrawer from '../containers/SideDrawerCon'
import './App.css'

class App extends React.Component {

	componentWillMount() {
		this.props.fetchWeekly();
		this.props.fetchSpecials('website');
		this.props.fetchSpecials('topic');
		this.props.fetchSpecials('other');
	}

	render () {
		return (
			<div>
				<Header />
				<Navigation />
				<SideDrawer >
					<div>Test</div>
				</SideDrawer>
				<div className="main">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default App