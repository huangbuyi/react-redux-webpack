import React from 'react'
import GoBack from './GoBack'
import SpecialBox from './SpecialBox'
import GoTopButton from './GoTopButton'
import RaisedButton from './RaisedButton'

class Websites extends React.Component {

	componentWillUpdate(nextProps) {
		var { websites, specials, fetchSpecial } = nextProps


		websites.data && websites.data.map( web => {
			if( !specials[web.id] ){
				fetchSpecial(web.id)
			}
		})
	}

	getMore () {
		this.props.fetchSpecials('website', this.props.websites.data.length)
	}

	render () {
		var { websites, specials } = this.props
		var that = this
		function getList() {
			var list = []

			// 将新添加的数据排在后篇
			Object.keys(specials).reverse().map( id => {
				list.push(
					<div key={id}>
						<SpecialBox cate='website' special={specials[id].data}/>
					</div>
				)
			})
			return list;
		}

		function getButton() {
			if( websites.isNoMore ) {
				return <RaisedButton disable={true}>没有嘞</RaisedButton>
			} else if ( websites.isFetching ) {
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

export default Websites