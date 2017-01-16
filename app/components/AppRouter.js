import React from 'react'
import AppCon from '../containers/AppCon'
import LinkDetailCon from '../containers/LinkDetailCon'

import { TopicCon, WebsitesCon, SourceCon, CircleCon, BooksCon, OtherCon } from '../containers/CateCon'
import MyEditor from './MyEditor'
import { IndexCon } from '../containers/IndexCon'
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import Loading from './Loading'
import SpecialDetailCon from '../containers/SpecialDetailCon'
import WeeklyDetailCon from '../containers/WeeklyDetailCon'





const AppRouter = () => (
	<Router history={browserHistory}>
		<Route path="/" component={AppCon}>
			<IndexRoute component={IndexCon} />
			<Route path="index" component={IndexCon} />

			<Route path="website" component={WebsitesCon} />
			<Route path="topic" component={TopicCon} />
			<Route path="source" component={SourceCon} />
			<Route path="circle" component={CircleCon} />
			<Route path="book" component={BooksCon} />
			<Route path="other" component={OtherCon} />
			<Route path="suggest" component={Loading} />


			<Route path="website/:id" component={LinkDetailCon} />
			<Route path="topic/:id" component={LinkDetailCon} />
			<Route path="source/:id" component={LinkDetailCon} />
			<Route path="circle/:id" component={LinkDetailCon} />
			<Route path="book/:id" component={LinkDetailCon} />
			<Route path="other/:id" component={LinkDetailCon} />

			<Route path="specials/:id" component={SpecialDetailCon} />
			
			<Route path="weekly/:id" component={WeeklyDetailCon} />
		</Route>
	</Router>
)

export default AppRouter

// todo: 添加book类
// todo: 修改名称