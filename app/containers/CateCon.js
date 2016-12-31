import { connect } from 'react-redux'
import { fetchSpecial, fetchSpecials } from '../actions'
import CateTemplate from '../components/CateTemplate'

// const mapStateToProps2 = (state) => ({
// 	oneCate: state.specialsByCate.website,
// 	specials: state.specialsByType.website,
// 	type: 'website'
// })

// const mapDispatchToProps = {
// 	fetchSpecial,
// 	fetchSpecials
// }

// const mapStateToProps = (state) => ({
// 	oneCate: state.specialsByCate.other,
// 	specials: state.specialsByType.other,
// 	type: 'other'
// })

// 组件生成器
function specialsGenerator( type ) {
	const mapStateToProps = (state) => ({
		isFetching: state.asynState.isFetching,
		oneCate: state.specialsByCate[type],
		specials: state.specialsByType[type],
		type: type
	})

	const mapDispatchToProps = {
		fetchSpecial,
		fetchSpecials
	}

	return connect(mapStateToProps, mapDispatchToProps)(CateTemplate)
}

const TopicCon = specialsGenerator('topic')
const WebsitesCon = specialsGenerator('website')
const SourceCon = specialsGenerator('source')
const CircleCon = specialsGenerator('circle')
const BooksCon = specialsGenerator('book')
const OtherCon = specialsGenerator('other')

export { TopicCon, WebsitesCon, SourceCon, CircleCon, BooksCon, OtherCon }