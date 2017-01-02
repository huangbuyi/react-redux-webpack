import { connect } from 'react-redux'
import { fetchWeekly, fetchSpecials, fetchWeeklyById } from '../actions'
import Index from '../components/Index'


const mapStateToProps = state => ({
	isFetching: state.asynState.isFetching,
	weekly: state.asynState.weekly,
	specialList: state.specialsByCate
})

const mapStateToProps2 = state => ({
	isFetching: state.weekly.isFetching,
	weekly: state.weekly.data,
	specialList: state.specialsByCate
})

export const IndexCon = connect(mapStateToProps, null)(Index)

export const WeeklyCon = connect(mapStateToProps2, null)(Index)

