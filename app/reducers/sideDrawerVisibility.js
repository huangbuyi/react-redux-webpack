const sideDrawerVisibility = (state = 'HIDE', action) => {
	switch (action.type) {
		case 'Open_SideDrawer':
			return 'SHOW'
		case 'Close_SideDrawer':
			return 'HIDE'
		default:
			return state
	}
}

export default sideDrawerVisibility;