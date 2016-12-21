import { connect } from 'react-redux'
import { openSideDrawer, switchRouter } from '../actions'
import Navigation from '../components/Navigation.jsx'

const mapStateToProps = (state) => ({
	route: state.navRouter
})

const mapDispatchToProps = ({
	onMoreClick: openSideDrawer,
	onClick: switchRouter
})

const NavigationCon = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationCon