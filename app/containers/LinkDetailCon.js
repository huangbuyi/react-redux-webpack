import { connect } from 'react-redux'
import { fetchLink } from '../actions'
import LinkDetail from '../components/LinkDetail'

const mapDispatchToProps = ({
	fetchLink
})

const mapStateToProps = (state) => ({
	linkDetail: state.linkDetail
})

const LinkDetailCon = connect(mapStateToProps, mapDispatchToProps)(LinkDetail)

export default LinkDetailCon