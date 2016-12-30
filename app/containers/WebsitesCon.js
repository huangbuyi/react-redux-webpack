import { connect } from 'react-redux'
import { fetchSpecial, fetchSpecials } from '../actions'
import Websites from '../components/Websites'

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
		oneCate: state.specialsByCate[type],
		specials: state.specialsByType[type],
		type: type
	})

	const mapDispatchToProps = {
		fetchSpecial,
		fetchSpecials
	}

	return connect(mapStateToProps, mapDispatchToProps)(Websites)
}

const WebsitesCon = specialsGenerator('website')
const SourceCon = specialsGenerator('website')
const CircleCon = specialsGenerator('website')
const BooksCon = specialsGenerator('website')
const OtherCon = specialsGenerator('other')

export { WebsitesCon, SourceCon, CircleCon, BooksCon, OtherCon }