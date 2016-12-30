import React from 'react'
import GoBack from './GoBack'
import SpecialBox from './SpecialBox'
import TopicSpecial from './TopicSpecial'
import GoTopButton from './GoTopButton'
import RaisedButton from './RaisedButton'

// 专题类型模板组件
class CateTemplate extends React.Component {
	// @oneCate is reference of specialsByCate state of store
	// @type is type of specials 
	// @specials is reference of specialsByType state of store

	componentWillUpdate(nextProps) {
		var { oneCate, type, specials, fetchSpecial } = nextProps

		// get special detail by id
		oneCate.data && oneCate.data.map( web => {
			if( !specials[web.id] ){
				fetchSpecial(type, web.id)
			}
		})
	}

	getMore () {
		var { fetchSpecials, type, oneCate} = this.props

		// get special list  
		fetchSpecials(type, oneCate.data.length)
	}

	render () {
		var { oneCate, specials, type } = this.props
		var that = this

		// get specials list JSX
		function getList() {
			var list = []

			// 将新添加的数据排在后篇
			Object.keys(specials).reverse().map( id => {
				list.push(
					<div key={id}>
						{ type !== 'topic' ?
							<SpecialBox cate={type} special={specials[id].data} /> :
							<TopicSpecial cate={type} topic={specials[id].data} /> }
					</div>
				)
			})
			return list;
		}
	
		// get "more" button according to different state
		function getButton() {
			if( oneCate.isNoMore ) {
				return <RaisedButton disable={true}>没有嘞</RaisedButton>
			} else if ( oneCate.isFetching ) {
				return <RaisedButton color='#65B165'>...加载呦</RaisedButton>
			}
			
			return <RaisedButton color='#65B165' onClick={that.getMore.bind(that)}>加载更多</RaisedButton>
		}

		return (
			<div>
				{ getList() }
				{ getButton() }
				<GoTopButton />
			</div>
		)
	}
}

export default CateTemplate