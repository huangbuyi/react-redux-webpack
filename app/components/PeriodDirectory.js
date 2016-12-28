import React from 'react'
import './PeriodDirectory.css'

const black = '#000';
const grey = '#757575'; 
const splitLine = '1px solid ' + grey;
const themeColor = '#f5f5f5';
const shadow_1 = '0 1.5px 6px rgba(0,0,0,0.12), 0 1.5px 4px rgba(0,0,0,0.24)'

const directoryStyle = {
	boxSizing: 'border-box',
	background: themeColor,
	padding: '4px 10px 180px 10px',
	boxShadow: shadow_1
}
const titleStyle = {
	fontSize: '14px',
	lineHeight: '28px',
	color: black
}
const headerStyle = {
	height: '28px',
	borderBottom: splitLine
}
const subheaderStyle = {
	height: '24px'
}
const dateStyle = {
	color: grey,
	float: "left",
	fontSize: '12px',
	lineHeight: '24px'
}
const periodStyle = {
	color: grey,
	float: "right",
	fontSize: '12px',
	lineHeight: '24px'
}

const introStyle = {
	color: black,
	fontSize: '13px',
	padding: '6px 0 12px 0',
	borderBottom: splitLine
}
const typeStyle = {
	fontSize: '13px',
	color: grey
}
const specialStyle = {
	fontSize: '13px',
	color: black,
	textIndent: '1em'
}

const liStyle = {
	marginTop: '14px'
}
class PeriodDirectory extends React.Component {

	getItem ( type, list ) {

		if( !list[type] || list[type].length == 0 ) {
			return null
		}
		var listP = list[type].map( (special, i) => (
			<p style={ specialStyle } key={i}>{ special.title }</p>
		))

		return (
			<div>
				<h2 style={ typeStyle }>{ type.toUpperCase() }</h2>
				{ listP }
			</div>
		)
	}

	render () {
		var {period, order} = this.props
		return (

			<div style={ directoryStyle }>
				<div style={ headerStyle }>
					<h1 style={ titleStyle }>{ period.title }</h1>
				</div>
				<div style={ subheaderStyle }>
					<p>
						<span style={ dateStyle }>{ period.date }</span>
						<span style={ periodStyle }>
							第 { period.period } 期
						</span>
					</p>
				</div>
				
				<p style={ introStyle }>{ period.text }</p>
				
				<ul className="periodList">
					{
						order.map( (type, i) => (
							<li style={liStyle} key={i}>
							{ this.getItem(type, period.list) }
							</li>
						) )
					}
				</ul>
			</div>
		)

	}
	
}




export default PeriodDirectory