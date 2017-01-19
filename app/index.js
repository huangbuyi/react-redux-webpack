/*import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import AppRouter from './components/AppRouter'
import reducer from './reducers/'
import './index.css'
import thunkModdleware from 'redux-thunk'

const store = createStore(reducer, applyMiddleware( thunkModdleware ))

store.subscribe( () => {
	console.log(store.getState())
})


// history数据持久化
if(window.localStorage){
	let currentValue;
	function handleChange() {
	  let previousValue = currentValue;
	  currentValue = store.getState().history

	  if (previousValue !== currentValue) {
	    if(window.localStorage.history != currentValue){
	    	window.localStorage.setItem("history", currentValue)
	    }
	  }
	}
	// 用作不记录设置
	let unsubscribe = store.subscribe(handleChange)
}




render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('content')
)*/
///
import React from 'react'
import { render } from 'react-dom'
import BackTop from './commons/BackTop'
import FlatButton from './commons/FlatButton'
import RaisedButton from './commons/RaisedButton'

render(
	<div style={{padding: '0 0 2000px 0'}}>
		<RaisedButton>DEFAULT</RaisedButton>
		<RaisedButton>DEFAULT</RaisedButton>
		<RaisedButton>DEFAULT</RaisedButton>
		<FlatButton>DEFAULT</FlatButton>
		<FlatButton>DEFAULT</FlatButton>
		<BackTop backgroundColor='rgba(0,0,0,0.30)' hoverColor='rgba(0,0,0,0.38)'/>
	</div>
	,
	document.getElementById('content')
)