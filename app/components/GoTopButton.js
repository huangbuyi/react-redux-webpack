import React from 'react'
import RaisedButton from './RaisedButton'

class GoTopButton extends React.Component {

	goToTop () {
		if ( document.body ) {
			document.body.scrollTop = 0
		} else {
			document.getElementsByTagName('body')[0].scrollTop = 0
		}
	}

	render () {
		return (
			<span>
				<RaisedButton color='#CC9933' onClick={ this.goToTop }>返回顶部</RaisedButton>
			</span>
		)
	}
}

export default GoTopButton