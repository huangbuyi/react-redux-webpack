import React from 'react'
import GoBack from './GoBack'
import Loading from './Loading'

const contStyle = {
	padding: "0 16px",
	float: "left",
	display: "inline-block"
}
const detailStyle = {
	boxSizeing: "border-box",
	padding: "8px 20px 100px 20px",
	width: "660px",
	background: "#F5F5F5"
}
const goBackStyle = {
	width: "200px",
	float: "left"
}
const titleStyle = {
	fontSize: "32px",
	color: "rgba(0,0,0,0.54)"
}
const subTitleStyle = {
	marginTop: "42px",
	fontSize: "24px",
	color: "rgba(0,0,0,0.54)",
	fontWeight: "bold"
}
const bodyStyle = {
	marginTop: "18px",
	fontSize: "13px",
	color: "rgba(0,0,0,0.87)"
}
const linkStyle = {
	fontSize: "13px",
	color: "#2196F3"
}



class LinkDetail extends React.Component {
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
		this.props.fetchLink( this.props.params.id )
	}

	componentDidUpdate(prevProps, prevState) {
		var oldId = prevProps.params.id
		var newId = this.props.params.id 
		if( newId !== oldId ){
			this.props.fetchLink( newId )
		}
	}

	render () {
		var { linkDetail } = this.props
		var link = linkDetail.link

		return (

			<div>
				<div style={ goBackStyle }>
					<GoBack router={ this.props.router }/>
				</div>
				<div style={ contStyle }>
					{ linkDetail.isFetching ?
						<div>
							<Loading />
						</div>
						:
						<div style={ detailStyle }>
							<h1 style={ titleStyle }>{ link.title }</h1>
							<p style={ bodyStyle }>
								网址：<a target="_blank" style={ linkStyle } 
										href={ link.target }
									  >{ link.target }</a>
							</p>
							<p style={ bodyStyle }>{ link.text }</p>
						</div>
					}
				</div>
			</div>
			
		)
	}

}

export default LinkDetail