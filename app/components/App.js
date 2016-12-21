// todo 尽量全部使用内联样式
// todo 将通用样式打包，例如主题颜色、规范颜色

import React from 'react'
import Header from './Header.jsx'
import Navigation from '../containers/NavigationCon'
import SideDrawer from '../containers/SideDrawerCon'
import ProjectSpecial from './ProjectSpecial'
import PeriodDirectory from './PeriodDirectory'
import PastSpecial from './PastSpecial'
import InformUs from './InformUs'
import SpecialBox from '../containers/SpecialBoxCon'
import BottomDrawer from './BottomDrawer'
import WebsiteDetail from './WebsiteDetail'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import { Projects, Websites } from './Projects'
import './App.css'
import { periods } from "../test_data/past"

var period = periods["12"]


const Index = () => (
	<div>
		<div className="leftSide">
			<PeriodDirectory period={period.periodList}/>
		</div>
		<div className="specials">
			<ProjectSpecial project={period.project} />
			<div className="specialBoxList">
				<SpecialBox special={period.website} />
			</div>
		</div>
		<div className="rightSide">
			<InformUs />
			<div className="pastSpecialAll">
				<PastSpecial cate={period.pastProjectList.cate} title={period.pastProjectList.title} specials={period.pastProjectList.specials} />
			</div>
				
		</div>		
	</div>
)


const App = ({ children }) => (
	<div>
		<Header />
		<Navigation />
		<SideDrawer >
			<div>Test</div>
		</SideDrawer>
		<div className="main">
			{ children }
		</div>
	</div>
)

const Past = ({ children }) => (
	<div>
		<h1>PAST</h1>
	</div>
)


const Detail2 = ({ params, children }) => (
	<div>
		<h1>Detail {params.id}</h1>
	</div>
)

const A = () => (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="/index" component={Index} />
			<Route path="/past" component={Past} />

			<Route path="/website" component={Websites} />
			<Route path="/project" component={Projects} />
			<Route path="/source" component={WebsiteDetail} />
			<Route path="/circle" component={WebsiteDetail} />
			<Route path="/book" component={WebsiteDetail} />
			<Route path="/suggest" component={WebsiteDetail} />

			<Route path="/website/:id" component={WebsiteDetail} />
			<Route path="/project/:id" component={WebsiteDetail} />
			<Route path="/source/:id" component={WebsiteDetail} />
			<Route path="/circle/:id" component={WebsiteDetail} />
			<Route path="/book/:id" component={WebsiteDetail} />
		</Route>
	</Router>
)

export default A