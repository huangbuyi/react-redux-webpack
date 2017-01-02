import { REQUEST_WEEKLYS, RECEIVE_WEEKLYS } from '../actions'

function weeklys(state = {
	isFetching: false,
	data: []
}, action) {
	switch (action.type) {
		case REQUEST_WEEKLYS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_WEEKLYS:
			return Object.assign({}, state, { 
				isFetching: false,
				data: action.json
			})
		default:
			return state
	}
}




export default weeklys

// todo: 重新设计树的格式，分开获取不同类型 special 数据。
// todo: 先查查相关教程。