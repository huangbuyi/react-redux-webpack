// fetch polyfill


export const openSideDrawer = () => ({
	type: 'Open_SideDrawer'
})
export const closeSideDrawer = () => ({
	type: "Close_SideDrawer"
})

export const switchRouter = (router) => ({
	type: 'Switch_Router',
	router: router
})

export const openTarget = (target) => {
	window.open(target);
	return {
		type: "Open_Target",
		target: target
	}	
}

// 请求 weekly 数据
export const REQUEST_WEEKLY = 'REQUEST_WEEKLY'
function requestWeekly () {
	return {
		type: REQUEST_WEEKLY
	}
}

export const RECEIVE_WEEKLY = 'RECEIVE_WEEKLY'
function receiveWeekly (json) {
	return {
		type: RECEIVE_WEEKLY,
		weekly: json
	}
}

export function fetchWeekly () {

	return function (dispatch) {
		dispatch(requestWeekly() )

		return fetch('http://localhost/laravel/public/weekly')
			.then( response => response.json() )
			.then( json => dispatch( receiveWeekly(json) )
		)
	}
}	

// 请求 special 列表数据
export const REQUEST_SPECIALS = 'REQUEST_SPECIALS'
function requestSpecials (type) {
	return {
		type: REQUEST_SPECIALS,
		cate: type
	}
}

export const RECEIVE_SPECIALS = 'RECEIVE_SPECIALS'
function receiveSpecials (type, json) {
	return {
		type: RECEIVE_SPECIALS,
		cate: type,
		json: json
	}
}

export function fetchSpecials (type) {
	return function (dispatch) {
		dispatch(requestSpecials(type))

		return fetch('http://localhost/laravel/public/specials?type=' + type)
			.then( response => response.json() )
			.then( json => dispatch( receiveSpecials(type, json) ) )
			.catch( error => { console.log(error) })
	}
}

// 请求 link 数据
export const REQUEST_LINK = 'REQUEST_LINK'
function requestLink (id) {
	return {
		type: REQUEST_LINK,
		link_id: id 
	}
}

export const RECEIVE_LINK = 'RECEIVE_LINK'
function receiveLink (id, json) {
	return {
		type: RECEIVE_LINK,
		link_id: id,
		json: json
	}
}

export function fetchLink (id) {
	return function (dispatch) {
		dispatch(requestLink(id))

		return fetch('http://localhost/laravel/public/links/' + id)
			.then( response => response.json() )
			.then ( json => dispatch( receiveLink(id, json) ))
			.catch( error => { console.log(error) })
	}
}