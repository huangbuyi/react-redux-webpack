import React from 'react'
import AppCon from '../containers/AppCon'
import LinkDetailCon from '../containers/LinkDetailCon'
import config from '../app.json'

import { TopicCon, WebsitesCon, SourceCon, CircleCon, BooksCon, OtherCon } from '../containers/CateCon'
import { IndexCon } from '../containers/IndexCon'
import { Router, Route, Redirect, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import SpecialDetailCon from '../containers/SpecialDetailCon'
import WeeklyDetailCon from '../containers/WeeklyDetailCon'

const history = {
	'hash': hashHistory,
	'browser': browserHistory
}[config.history]

const AppRouter = () => (
	<Router history={ history }>
		<Route path="/" component={AppCon}>
			<IndexRoute component={IndexCon} />
			<Route path="index" component={IndexCon} />

			<Route path="website" component={WebsitesCon} />
			<Route path="topic" component={TopicCon} />
			<Route path="source" component={SourceCon} />
			<Route path="circle" component={CircleCon} />
			<Route path="book" component={BooksCon} />
			<Route path="other" component={OtherCon} />

			<Route path="website/:id" component={LinkDetailCon} />
			<Route path="topic/:id" component={LinkDetailCon} />
			<Route path="source/:id" component={LinkDetailCon} />
			<Route path="circle/:id" component={LinkDetailCon} />
			<Route path="book/:id" component={LinkDetailCon} />
			<Route path="other/:id" component={LinkDetailCon} />

			<Route path="specials/:id" component={SpecialDetailCon} />
			
			<Route path="weekly/:id" component={WeeklyDetailCon} />
		</Route>
		<Redirect from="/index.html" to="/" />
		<Redirect from="/index.php" to="/" />
	</Router>
)

export default AppRouter