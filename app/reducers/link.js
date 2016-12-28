import { REQUEST_LINK, RECEIVE_LINK } from '../actions'

function linkDetail(state = {
	isFetching: false,
	link: {
		id: 0,
		title: '',
		text: '',
		target: '',
		create_at: '',
		type: '未知',

	}
}, action) {
	switch (action.type) {
		case REQUEST_LINK:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_LINK:
			
			return Object.assign({}, state, {
				isFetching: false,
				link: action.json
			})
		default:
			return state
	}
}

export default linkDetail