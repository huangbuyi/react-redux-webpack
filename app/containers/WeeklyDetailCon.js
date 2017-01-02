import { connect } from 'react-redux'
import { fetchWeeklyById } from '../actions'
import WeeklyDetail from '../components/WeeklyDetail'


const mapDispatchToProps = {
	fetchWeeklyById
}

const WeeklyDetailCon = connect(null, mapDispatchToProps)(WeeklyDetail)

export default WeeklyDetailCon

