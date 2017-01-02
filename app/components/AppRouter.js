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

import Surface from './Surface'


class Surface2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	handleClick () {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render () {
		var style = {
			position: 'absolute',
			left: '100%',
			top: '0'
		}

		var style2 = {
			width: '400px',
			height: '400px',
			display: 'inline-block'
		}

		return (
			<div style={{position:'relative',display:'inline-block',margin:'100px 0 0 100px'}}>
				<p onClick={this.handleClick.bind(this)}>666666666</p>
				<div style={ style }>
					<Surface isOpen={this.state.isOpen} x={1} y={1} offsetX={100} offsetY={50}>
						<span style={style2}>PASThfad;sh;fdas;fjasdlfjjdfas</span>
					</Surface>
				</div>
			</div>
		)
	}
	
}


const AppRouter = () => (
	<Router history={hashHistory}>
		<Route path="/" component={AppCon}>
			<IndexRoute component={IndexCon} />
			<Route path="/index" component={IndexCon} />

			<Route path="/website" component={WebsitesCon} />
			<Route path="/topic" component={TopicCon} />
			<Route path="/source" component={SourceCon} />
			<Route path="/circle" component={CircleCon} />
			<Route path="/book" component={BooksCon} />
			<Route path="/other" component={OtherCon} />
			<Route path="/suggest" component={Loading} />


			<Route path="/website/:id" component={LinkDetailCon} />
			<Route path="/topic/:id" component={LinkDetailCon} />
			<Route path="/source/:id" component={LinkDetailCon} />
			<Route path="/circle/:id" component={LinkDetailCon} />
			<Route path="/book/:id" component={LinkDetailCon} />
			<Route path="/other/:id" component={LinkDetailCon} />

			<Route path="/specials/:id" component={SpecialDetailCon} />
			
			<Route path="/weekly/:id" component={WeeklyDetailCon} />
			<Route path="/test" component={Surface2} />
		</Route>
	</Router>
)

export default AppRouter

// todo: 添加book类
// todo: 修改名称