import React from 'react'
import SelectBox from './SelectBox.jsx'

class PastWeekly extends React.Component {

	static defaultProps = {
		weeklyList: {
			'11': ''
		}
	}

	render () {	
		console.log( this.props.children )
		return (
			<div>
				{ this.props.children }
			</div>
		)
	}
}



export PastWeekly Test