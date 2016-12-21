const navRouter = (state = '/index', action) => {
	switch (action.type) {
		case 'Switch_Router':
			return action.router
		default:
			return state
	}
}

export default navRouter;