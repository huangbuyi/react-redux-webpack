import { combineReducers } from 'redux'
import sideDrawerVisibility from './sideDrawerVisibility'
import navRouter from './navRouter'
import history from './history'
import asynState from './asynState'
import specialsByCate from './specialsByCate'
import specialsById from './specialsById'
import linkDetail from './link'

const myApp = combineReducers({
	sideDrawerVisibility,
	navRouter,
	history,
	asynState,
	specialsByCate,
	specialsById,
	linkDetail
})

export default myApp