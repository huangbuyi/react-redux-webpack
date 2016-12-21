import { combineReducers } from 'redux'
import sideDrawerVisibility from './sideDrawerVisibility'
import navRouter from './navRouter'
import history from './history'

const myApp = combineReducers({
	sideDrawerVisibility,
	navRouter,
	history
})

export default myApp