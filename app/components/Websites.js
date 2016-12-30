import React from 'react'
import GoBack from './GoBack'
import SpecialBox from './SpecialBox'
import GoTopButton from './GoTopButton'
import RaisedButton from './RaisedButton'

class Websites extends React.Component {

	componentWillUpdate(nextProps) {
		var { oneCate, type, specials, fetchSpecial } = nextProps


		oneCate.data && oneCate.data.map( web => {
			if( !specials[web.id] ){
				fetchSpecial(type, web.id)
			}
		})
	}

	getMore () {
		var { fetchSpecials, type, oneCate} = this.props
		fetchSpecials(type, oneCate.data.length)
	}

	render () {
		var { oneCate, specials, type } = this.props
		var that = this
		function getList() {
			var list = []

			// 将新添加的数据排在后篇
			Object.keys(specials).reverse().map( id => {
				list.push(
					<div key={id}>
						<SpecialBox cate={type} special={specials[id].data}/>
					</div>
				)
			})
			return list;
		}

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

export default Websites