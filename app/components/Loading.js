import React from 'react'
import './loading.css'

const style = {
	width: '60px',
	height: '60px',
	margin: '0 auto'
}

const Loading = () => (
	<div style={style}>
		<div className="row clearfix">
			<div className="square one"></div> 
			<div className="square two"></div>
			<div className="square three"></div>
		</div>

		<div className="row clearfix">
			<div className="square eight"></div> 
			<div className="square nine"></div>
			<div className="square four"></div>
		</div>

		<div className="row clearfix">
			<div className="square seven"></div> 
			<div className="square six"></div>
			<div className="square five"></div>
		</div>
	</div>
)

export default Loading

// todo 将loading的样式放入scss，避免命名冲突