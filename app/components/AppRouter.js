import React from 'react'
import AppCon from '../containers/AppCon'
import LinkDetailCon from '../containers/LinkDetailCon'

import { Projects, Websites } from './Projects'
import MyEditor from './MyEditor'
import Index from '../containers/IndexCon'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'

const Past = ({ children }) => (
	<div>
		<h1>PAST</h1>
	</div>
)


const AppRouter = () => (
	<Router history={hashHistory}>
		<Route path="/" component={AppCon}>
			<IndexRoute component={Index} />
			<Route path="/index" component={Index} />
			<Route path="/past" component={Past} />

			<Route path="/website" component={Websites} />
			<Route path="/project" component={Projects} />
			<Route path="/source" component={LinkDetailCon} />
			<Route path="/circle" component={LinkDetailCon} />
			<Route path="/book" component={MyEditor} />
			<Route path="/suggest" component={LinkDetailCon} />

			<Route path="/website/:id" component={LinkDetailCon} />
			<Route path="/project/:id" component={LinkDetailCon} />
			<Route path="/source/:id" component={LinkDetailCon} />
			<Route path="/circle/:id" component={LinkDetailCon} />
			<Route path="/book/:id" component={LinkDetailCon} />
			<Route path="/other/:id" component={LinkDetailCon} />
		</Route>
	</Router>
)

export default AppRouter

// todo: 添加book类