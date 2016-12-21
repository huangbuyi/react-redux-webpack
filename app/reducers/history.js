// 获取本地储存的历史信息
function getLoacalHistory(){

	if( window.localStorage && window.localStorage.history ){
		return window.localStorage.history.split(",")
	} 
	return []
}


const history = (state = getLoacalHistory(), action) => {
	switch (action.type) {
		case 'Open_Target':
			var newState = state.slice(0);

			// 历史长度限定10以内
			if( newState >= 10 ) {
				newState.shift()
			}
			newState.push(action.target);

			return newState
		default:
			return state
	}
}

export default history;