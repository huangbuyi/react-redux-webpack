import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers/'
import './index.css'

const store = createStore(reducer)

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
		<App />
	</Provider>,
	document.getElementById('content')
)