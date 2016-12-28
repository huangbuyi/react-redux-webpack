import { connect } from 'react-redux'
import { fetchWeekly, fetchSpecials } from '../actions'
import App from '../components/App'

const mapDispatchToProps = ({
	fetchWeekly,
	fetchSpecials
})

const AppCon = connect(null, mapDispatchToProps)(App)

export default AppCon