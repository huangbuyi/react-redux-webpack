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