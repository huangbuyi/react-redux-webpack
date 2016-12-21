import React from 'react'
import './PeriodDirectory.css'

var subStyle = {
	fontSize: "12px",
	color: "rgba(0,0,0,0.54)",
	overflow: "hidden"
}
var dateStyle = {
	float: "left"
}
var periodStyle = {
	float: "right"
}


const PeriodDirectory = ({ period, onClick }) => (
	<div className="periodDirectory">
		<div className="periodTitle">本期专题</div>
		<p style={ subStyle }>
			<span style={ dateStyle }>{period.date}</span>
			<span style={ periodStyle }>
				第{ period.period }期
			</span>
		</p>
		
		<ul className="periodList">
			{
				period.list.map( (item, i) => (
					<li key={i}>
						<h2>{item.special}</h2>
						<p>{item.title}</p>
					</li>
				) )
			}
		</ul>
	</div>
)


export default PeriodDirectory