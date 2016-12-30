import { connect } from 'react-redux'
import { fetchSpecial, fetchSpecials } from '../actions'
import Websites from '../components/Websites'

const mapStateToProps = (state) => ({
	websites: state.specialsByCate.website,
	specials: state.specialsById
})

const mapDispatchToProps = {
	fetchSpecial,
	fetchSpecials
}

const WebsitesCon = connect(mapStateToProps, mapDispatchToProps)(Websites)

export default WebsitesCon