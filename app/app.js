/*import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { render } from 'react-dom';
import Webbox from './components/Webbox.jsx';
import CommentBox from './components/CommentBox.jsx';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import SearchBox from './Components/SearchBox.jsx';
import './app.css';*/

var data = [
			{ id:1,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.baidu.com" },
			{ id:2,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:3,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:4,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:5,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:6,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:7,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:8,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:9,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:10,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:11,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:12,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" }
		]

var data2 = [
			{ id:1,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.baidu.com" },
			{ id:2,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" },
			{ id:3,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" }
		]

// const App = () => (
// 	<div style={ {margin:"40px 40px"} }>
//     	<Webbox title="托管平台" data={data}/>
//     	<Webbox title="嘿嘿嘿平台" data={data2}/>
//     </div>
// );


// const App = () => (
// 	<div style={ {margin:"40px 40px"} }>
// 		<ReactCssTransitionGroup  transitionName="test"
// 			transitionAppear={true}
//       		transitionAppearTimeout={400}
//          	transitionEnterTimeout={400}
//          	transitionLeaveTimeout={300}>
// 			<Webbox title="托管平台" data={data}/>
// 		</ReactCssTransitionGroup>
    	
//     </div>
// );
var cb = { id:8,title:"Github",description:"某代码托管网站",ip:135790,comment:56,url:"http://www.github.com" };

var comments = [
	{id:1234, user:"Jerry",text:"It's a really awsome website!", time:"10分钟前"},
	{id:1235, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1236, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1237, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1238, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1239, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1240, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1241, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1242, user:"Martin",text:"It's a really cool website!", time:"10分钟前"},
	{id:1243, user:"Martin",text:"It's a really cool website!", time:"10分钟前"}
]


// const App = () => (
// 	<div>
//     	<Header />
//     	<Navigation />
//     </div>
// );

// const App = () => (
// 	<div className="cont">
//     	<SearchBox />
//     </div>
// );


import React from 'react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Webbox from './components/Webbox.jsx';
import { render } from 'react-dom';
import Particles from './Components/Particles.jsx';
import SideDrawer from './Components/SideDrawer.jsx';
import './app.css';

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
    			<Navigation nav={window.location.hash.slice(1)}/>
    			{this.props.children}
   		 	</div>	
		)
	}
}


class Test2 extends React.Component {
	render () {
		return (
			<SideDrawer>
				<div className="webboxes">
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
			</SideDrawer>
		)
	}
}




// Then we delete a bunch of code from App and
// add some <Link> elements...
class Web extends React.Component {
	static defaultProps = {
		test: "tttt"
	}
	render () {
		return (
			<div className="cont">

			<div ref="content" className="chanels chanels-main">
				<div className="webboxes">
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
				<div className="webboxes">
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
				<div className="webboxes">
					<Webbox title="嘿嘿嘿平台" data={data2}/>
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
			</div>

			<div className="chanels display-chanels">
				<div className="webboxes">
					<Webbox title="嘿嘿嘿平台" data={data2}/>
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
			</div>

			<div className="chanels drawer-chanel">
				<div className="webboxes">
					<Webbox title="嘿嘿嘿平台" data={data2}/>
					<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
			     	<Webbox title="托管平台" data={data}/>
			     	<Webbox title="嘿嘿嘿平台" data={data2}/>
				</div>
				<div className="webboxes">
					<Webbox title="嘿嘿嘿平台" data={data2}/>
					<Webbox title="托管平台" data={data}/>
				</div>
			</div>
			
			</div>
		)
	}

	handleResize (){
		console.log(this.refs.content.offsetWidth);
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize.bind(this));
	}
}


const Routtte = React.createClass({/*...*/
	render() {
		return (
			<div>Route</div>
		)
	}
})

const Source = React.createClass({/*...*/
	render() {
		return (
			<div className="login">
				<Particles />
			</div>
		)
	}
})
const InboxStats = React.createClass({/*...*/
	render() {
		return (
			<div>InboxStats</div>
		)
	}
})
// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         {/* change the <a>s to <Link>s */}
//         <ul>
//           <li><Link to="/">About</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>

//         {/*
//           next we replace `<Child>` with `this.props.children`
//           the router will figure out the children for us
//         */}
//         {this.props.children}
//       </div>
//     )
//   }
// })
// Make a new component to render inside of Inbox
const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {/* Render the child route component */}
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      // <IndexRoute component={Web} />
      <Route path="/web" component={Web} />
      <Route path="/source" component={Test2} />
      <Route path="/route" component={Routtte}>
        {/* add some nested routes where we want the UI to nest */}
        {/* render the stats page when at `/inbox` */}
        <IndexRoute component={InboxStats}/>
        {/* render the message component at /inbox/messages/123 */}
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
),document.getElementById("content") )


//render( <App />, document.getElementById("content") );

// 修改contenteditable插件，似乎不需要reset