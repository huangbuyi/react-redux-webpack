import React from 'react'
import RaisedButton from './RaisedButton'
import { Link } from 'react-router'

var text = "点击放回上一页";
var btnText = "返回"

var tipStyle = {
	fontSize: "12px",
	color: "rgba(0,0,0,0.33)",
	textAlign: "center"
}

var style = {
	width: "160px",
	padding: "22px 20px",
	alignItem: "center",
	textAlign: "center",
	background: "#F5F5F5"
}

var tipTopStyle = {
	marginTop: "14px"
}

const ReturnBtn = ({ onClick }) => (
	<div style={style}>
		<RaisedButton onClick={onClick} color="#CC9933">返回</RaisedButton>
		<div style={tipTopStyle}>
			<p style={tipStyle}>{text}</p>
		</div>
	</div>
)


class GoBack extends React.Component { 

	handleClick () {
		this.props.router.goBack()
	}

	render () {
		return (
			<div>
				<ReturnBtn onClick={this.handleClick.bind(this)}/>
			</div>
		)
	}
	

}
export default GoBack