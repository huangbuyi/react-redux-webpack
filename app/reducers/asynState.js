import { REQUEST_WEEKLY, RECEIVE_WEEKLY } from '../actions'

function weekly(state = {
	isFetching: false,
	weekly: {
		id: 0,
		period: 0,
		title: '',
		text: '',
		list: {},
		create_at: '',
		date: '2022-02-22',

	}
}, action) {
	switch (action.type) {
		case REQUEST_WEEKLY:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_WEEKLY:
			var { specials, topics, ...props } = action.weekly
			var order = ['topic', 'website', 'source', 'circle', 'other']

			var list = {};
			if(topics){
				list['topic'] = [];
				topics.map( (topic) => {
					list['topic'].push(topic)
				})
			}

			var type = '';
			if(specials){
				specials.map( (special) => {
					
					if ( order.indexOf( special.type ) > -1 ){
						type = special.type
					} else {
						type = 'other'
					}

					if ( !list[type] ){
						list[type] = []
					}
					
					list[type].push(special)
				})
			}
			
			return Object.assign({}, state, {
				isFetching: false,
				weekly: {
					list,
					...props
				}
			})
		default:
			return state
	}
}

export default weekly