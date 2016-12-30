import { combineReducers } from 'redux'
import sideDrawerVisibility from './sideDrawerVisibility'
import navRouter from './navRouter'
import history from './history'
import asynState from './asynState'
import specialsByCate from './specialsByCate'
import specialsByType from './specialsByType'
import linkDetail from './link'

const myApp = combineReducers({
	sideDrawerVisibility,
	navRouter,
	history,
	asynState,
	specialsByCate,
	specialsByType,
	linkDetail
})

export default myApp