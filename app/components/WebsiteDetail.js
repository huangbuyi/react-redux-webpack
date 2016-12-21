import React from 'react'
import GoBack from './GoBack'
import { websiteAll } from '../test_data/past'

var contStyle = {
	padding: "0 16px",
	float: "left",
	display: "inline-block"
}
var detailStyle = {
	boxSizeing: "border-box",
	padding: "8px 20px 100px 20px",
	width: "660px",
	background: "#F5F5F5"
}
var goBackStyle = {
	width: "200px",
	float: "left"
}
var titleStyle = {
	fontSize: "32px",
	color: "rgba(0,0,0,0.54)"
}
var subTitleStyle = {
	marginTop: "42px",
	fontSize: "24px",
	color: "rgba(0,0,0,0.54)",
	fontWeight: "bold"
}
var bodyStyle = {
	marginTop: "18px",
	fontSize: "13px",
	color: "rgba(0,0,0,0.87)"
}
var linkStyle = {
	fontSize: "13px",
	color: "#2196F3"
}



class WebsiteDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				title: "",
				target: "",
				text: ""
			},
			relative: []
		}
	}

	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate(prevProps, prevState) {
		let oldId = prevProps.params.id
		let newId = this.props.params.id 
		if( newId !== oldId ){
			this.fetchData()
		}
	}

	fetchData () {
		var data = websiteAll[this.props.params.id];
		this.setState({data: data})
		if( data.relative && Array.isArray(data.relative) ) {
			var rel = [];
			data.relative.map( (id) => {
				rel.push({
					title: websiteAll[id].title,
					target: websiteAll[id].target
				})
			})
			this.setState({relative: rel});
		}
	}

	render () {
		var {target,title,text} = this.state.data
		var items = []

		this.state.relative.map((r, i) =>{
			items.push(
				<li key={i}>
					<p>{r.title}：
						<a style={ linkStyle }
							target="_blank" 
							href={r.target}
						>
							{r.target}
						</a>
					</p>
				</li>
			)
		})

		return (
			<div>
				<div style={ goBackStyle }>
					<GoBack router={ this.props.router }/>
				</div>
				<div style={ contStyle }>
					<div style={ detailStyle }>
						<h1 style={titleStyle}>{ title }</h1>
						<p style={ bodyStyle }>
							网址：<a target="_blank" style={ linkStyle } 
									href={ target }
								  >{ target }</a>
						</p>
						<p style={ bodyStyle }>{ text }</p>
						<h2 style={ subTitleStyle }>相关链接</h2>
						<ul style={ bodyStyle }>
							{items}
						</ul>
					</div>
				</div>
			</div>
			
		)
	}

}

export default WebsiteDetail