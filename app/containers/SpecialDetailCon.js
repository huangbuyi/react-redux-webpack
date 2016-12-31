import { connect } from 'react-redux'
import { fetchSpecial } from '../actions'
import SpecialDetail from '../components/SpecialDetail'

const mapStateToProps = (state) => ({
	specials: state.specialsByType
})

const mapDispatchToProps = ({
	fetchSpecial
})

const SpecialDetailCon = connect(mapStateToProps, mapDispatchToProps)(SpecialDetail)

export default SpecialDetailCon