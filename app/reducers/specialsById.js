import { REQUEST_SPECIAL, RECEIVE_SPECIAL } from '../actions'

function specials(state = {}, action) {
	switch (action.type) {
		case REQUEST_SPECIAL:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_SPECIAL:
			return Object.assign({}, { 
				isFetching: false,
				data: action.json
			})
		default:
			return state
	}
}

function specialsById(state = {
}, action) {
	switch (action.type) {
		case REQUEST_SPECIAL:
		case RECEIVE_SPECIAL:
			return Object.assign({}, state, {
				[action.special_id]: specials(state[action.special_id], action)
			})
		default:
			return state
	}
}

export default specialsById

// todo: 重新设计树的格式，分开获取不同类型 special 数据。
// todo: 先查查相关教程。