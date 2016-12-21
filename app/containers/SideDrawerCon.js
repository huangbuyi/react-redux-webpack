import { connect } from 'react-redux'
import { closeSideDrawer } from '../actions'
import SideDrawer from '../components/SideDrawer.jsx'

const mapStateToProps = (state) => ({
	visibility: state.sideDrawerVisibility == 'SHOW' ? true : false
})

const mapDispatchToProps = (dispatch) => {
	return {
		onHideClick: () => { 
			dispatch(closeSideDrawer()) 
		}
	}
}

const SideDrawerCon = connect(mapStateToProps, mapDispatchToProps)(SideDrawer)

export default SideDrawerCon