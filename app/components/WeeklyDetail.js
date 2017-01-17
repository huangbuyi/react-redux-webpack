import React from 'react'
import GoBack from './GoBack'
import Loading from './Loading'
import { WeeklyCon } from '../containers/IndexCon'

class WeeklyDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentDidMount() {
		this.props.fetchWeeklyById( this.props.params.id )
	}

	componentDidUpdate(prevProps, prevState) {
		var oldId = prevProps.params.id
		var newId = this.props.params.id 
		if( newId !== oldId ){
			this.props.fetchWeeklyById( newId )
		}
	}

	render () {

		return (
			<div>			
				<WeeklyCon />
			</div>
		)
	}

}

export default WeeklyDetail