// fetch polyfill
import 'whatwg-fetch'
import config from '../app.json' 

const host = config.apiHost
//const host = 'http://4bin.cn/FEC52/public/'

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

		return fetch(host + 'weekly')
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

export function fetchSpecials (type, start = 0) {
	return function (dispatch) {
		dispatch(requestSpecials(type))

		return fetch(host + 'specials?limit=5&type=' + type + '&start=' + start)
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

		return fetch(host + 'links/' + id)
			.then( response => response.json() )
			.then ( json => dispatch( receiveLink(id, json) ))
			.catch( error => { console.log(error) })
	}
}

// 请求 special 数据
export const REQUEST_SPECIAL = 'REQUEST_SPECIAL'
function requestSpecial (cate, id) {
	return {
		type: REQUEST_SPECIAL,
		special_id: id,
		cate: cate
	}
}

export const RECEIVE_SPECIAL = 'RECEIVE_SPECIAL'
function receiveSpecial (cate, id, json) {
	return {
		type: RECEIVE_SPECIAL,
		special_id: id,
		json: json,
		cate: cate
	}
}

export function fetchSpecial (cate, id) {
	return function (dispatch) {
		dispatch(requestSpecial(cate, id))

		return fetch(host + 'specials/' + id)
			.then( response => response.json() )
			.then ( json => dispatch( receiveSpecial(cate, id, json) ))
			.catch( error => { console.log(error) })
	}
}

// 请求 Weekly List 数据
export const REQUEST_WEEKLYS = 'REQUEST_WEEKLYS'
function requestWeeklys () {
	return {
		type: REQUEST_WEEKLYS,
	}
}

export const RECEIVE_WEEKLYS= 'RECEIVE_WEEKLYS'
function receiveWeeklys (json) {
	return {
		type: RECEIVE_WEEKLYS,
		json: json
	}
}

export function fetchWeeklys () {
	return function (dispatch) {
		dispatch(requestWeeklys())

		return fetch(host + 'weeklys')
			.then( response => response.json() )
			.then ( json => dispatch( receiveWeeklys(json) ))
			.catch( error => { console.log(error) })
	}
}


// 请求指定 Weekly 数据
export const REQUEST_WEEKLY_BY_ID = 'REQUEST_WEEKLY_BY_ID'
function requestWeeklyById (id) {
	return {
		type: REQUEST_WEEKLY_BY_ID,
		weekly_id: id 
	}
}

export const RECEIVE_WEEKLY_BY_ID = 'RECEIVE_WEEKLY_BY_ID'
function receiveWeeklyById (id, json) {
	return {
		type: RECEIVE_WEEKLY_BY_ID,
		weekly_id: id,
		data: json
	}
}

export function fetchWeeklyById (id) {
	return function (dispatch) {
		dispatch( requestWeeklyById(id) )

		return fetch(host + 'weeklys/' + id)
			.then( response => response.json() )
			.then ( json => dispatch( receiveWeeklyById(id, json) ))
			.catch( error => { console.log(error) })
	}
}
