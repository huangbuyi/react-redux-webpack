import React from 'react'
import SelectBox from './SelectBox.jsx'
import { Link } from 'react-router' 
import Loading  from './Loading'

const selectStyle = {
	position: 'relative',
	display: 'inline-block'
}

const loadingStyle = {
	color: 'rgba(0,0,0,0.87)'
}

class PastWeekly extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weeklyList: []
		}
	}

	// static defaultProps = {
	// 	weeklyList: {
	// 		11: '第 11 期   好厉害的前端攻城狮',
	// 		10: '第 10 期   第二的前端攻城狮'
	// 	}
	// }

	handleWeeklyChange (id) {
		this.props.router.push('/weekly/' + id )
	}

	componentDidMount() {
		console.log(this.props)
		this.props.fetchWeeklys()
	}

	render () {	
		var { weeklyList, isFetching } = this.props
		var options = {}
		weeklyList.map( item => (
			options[item.id] = '第 ' + item.period + ' 期 ' + '---- ' + item.title
		))
		return (
			<div>
				<div className='pastWeekly' style={ selectStyle }>
					{
						isFetching ?
						<p style={ loadingStyle }>加载中...</p>
						:
						<SelectBox width={280} default={1} left={-210} top={-60} 
							onClick={this.handleWeeklyChange.bind(this)} options={options} fixTxt='查看往期'/>
					}
				</div>
			</div>
		)
	}
}



export default PastWeekly 