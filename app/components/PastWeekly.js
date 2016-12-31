import React from 'react'
import SelectBox from './SelectBox.jsx'

const selectStyle = {
	position: 'relative',
	display: 'inline-block'
}

class PastWeekly extends React.Component {

	static defaultProps = {
		weeklyList: {
			11: '第 11 期   好厉害的前端攻城狮',
			10: '第 10 期   第二的前端攻城狮'
		}
	}

	handleWeeklyChange (a) {
		console.log(a)
	}

	render () {	
		var { weeklyList } = this.props
		return (
			<div>
				<div style={ selectStyle }>
					<SelectBox width={280} default={11} left={-10} top={-60} onClick={this.handleWeeklyChange.bind(this)} options={weeklyList}/>
				</div>
			</div>
		)
	}
}



export default PastWeekly 