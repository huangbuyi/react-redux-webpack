import { connect } from 'react-redux'
import { fetchWeekly, fetchSpecials } from '../actions'
import Index from '../components/Index'


const mapStateToProps = (state) => ({
	isFetching: state.asynState.isFetching,
	weekly: state.asynState.weekly,
	specialList: state.specialsByCate
})

const IndexCon = connect(mapStateToProps, null)(Index)

export default IndexCon