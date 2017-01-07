// todo 尽量全部使用内联样式
// todo 将通用样式打包，例如主题颜色、规范颜色

import React from 'react'
import Header from './Header.jsx'
import Navigation from '../containers/NavigationCon'
import SideDrawer from '../containers/SideDrawerCon'
import Footer from './Footer'

class App extends React.Component {

	componentWillMount() {
		this.props.fetchWeekly();
		this.props.fetchSpecials('website');
		this.props.fetchSpecials('topic');
		this.props.fetchSpecials('source');
		this.props.fetchSpecials('circle');
		this.props.fetchSpecials('book');
		this.props.fetchSpecials('other');
	}

	render () {
		return (
			<div>
				<Header />
				<Navigation router={this.props.router}/>
				<SideDrawer >
					<div>Test</div>
				</SideDrawer>
				<div style={ mainStyle } className="main">
					{ this.props.children }
				</div>
				<Footer />
			</div>
		)
	}
}


const mainStyle = {
	boxSizing: 'border-box',
	minHeight: 'calc(100vh - 199px)',
	overflow: 'hidden'
}

export default App