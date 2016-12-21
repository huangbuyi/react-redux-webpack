import React from 'react'
import './RaisedButton.css'


const RaisedButton = ({text="默认", color="#2196F3", onClick=null}) => (
	<div onClick={ onClick } style={{background: color}}
		className="myRaisedButton"
	>
		{text}
	</div>
)

export default RaisedButton