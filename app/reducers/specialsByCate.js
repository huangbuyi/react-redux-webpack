import { REQUEST_SPECIALS, RECEIVE_SPECIALS } from '../actions'

function specials(state = {
	isFetching: false,
	data: [],
	isNoMore: false
}, action) {
	switch (action.type) {
		case REQUEST_SPECIALS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_SPECIALS:
			return Object.assign({}, { 
				isFetching: false,
				data: state.data.concat(action.json),
				isNoMore: action.json.length == 0 ? true : false
			})
		default:
			return state
	}
}

function specialsByCate(state = {}, action) {
	switch (action.type) {
		case REQUEST_SPECIALS:
		case RECEIVE_SPECIALS:
			return Object.assign({}, state, {
				[action.cate]: specials(state[action.cate], action)
			})
		default:
			return state
	}
}

export default specialsByCate

// todo: 重新设计树的格式，分开获取不同类型 special 数据。
// todo: 先查查相关教程。