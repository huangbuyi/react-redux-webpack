import { connect } from 'react-redux'
import { fetchWeeklys } from '../actions'
import PastWeekly from '../components/PastWeekly'

const mapDispatchToProps = ({
	fetchWeeklys
})

const mapStateToProps = state => ({
	isFetching: state.weeklys.isFetching,
	weeklyList: state.weeklys.data
})

const PastWeeklyCon = connect(mapStateToProps, mapDispatchToProps)(PastWeekly)

export default PastWeeklyCon