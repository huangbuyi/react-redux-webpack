import React from 'react'
import GoBack from './GoBack'
import Loading from './Loading'
import config from '../app.json'

const { prefix, topicPostfix, specialPostfix } = config.image

const themeColor = '#f5f5f5'

const conStyle = {
	padding: '0 20px 100px 20px',
	display: 'inline-block'
}

const backConStyle = {
	float: 'left',
	width: '200px'
}

const mainConStyle = {
	float: 'left',
	display: 'inline-block'
}

const titleConStyle = {
	width: '570px',
	display: 'inline-block',
	background: themeColor
}

const imgStyle = {
	width: '170px',
	height: '230px',
	display: 'inline-block',
	float: 'left',
	background: 'rgba(0,0,0,0.54)'
}

const topicImgStyle = {
	width: '570px',
	height: '421px',
	background: 'rgba(0,0,0,0.54)'
}

const txtConStyle = {
	position: 'relative',
	boxSizing: 'border-box',
	width: '400px',
	height: '230px',
	display: 'inline-block',
	padding: '12px 24px',
	float: 'left'
}

const topicTxtConStyle = {
	position: 'relative',
	boxSizing: 'border-box',
	width: '570px',
	padding: '12px 24px',
}

const h1Style = {
	color: '#EA9E00',
	fontSize: '24px'
}

const textStyle = {
	height: '120px',
	overflow: 'hidden',
	lineHeight: '20px',
	marginTop: '20px',
	marginLeft: '4px',
	color: 'rgba(0,0,0,0.87)',
	fontSize: '12px'
}

const topicTextStyle = {
	lineHeight: '20px',
	margin: '12px 0 32px 4px',
	color: 'rgba(0,0,0,0.87)',
	fontSize: '12px'
}

const cationStyle = {
	paddingLeft: '4px',
	position: 'absolute',
	bottom: '12px',
	color: 'rgba(0,0,0,0.54)',
	fontSize: '12px'
}

const dateStyle = {
	marginLeft: '26px'
}

const itemStyle = {
	boxSizing: 'border-box',
	padding: '12px',
	marginTop: '16px',
	width: '570px',
	background: themeColor
}

const itemH2Style = {
	fontSize: '14px',
	fontWeight: 'bold',
	color: '#2196F3'
}

const targetStyle = {
	fontSize: '12px',
	color: 'rgba(0,0,0,0.54)'
}

const itemPStyle = {
	textIndent: '2em',
	marginTop: '20px',
	fontSize: '12px',
	color: 'rgba(0,0,0,0.87)'
}

const itemDateStyle = {
	marginTop: '20px',
	fontSize: '12px',
	color: 'rgba(0,0,0,0.54)'
}

class SpecialDetail extends React.Component {

	getSpecial (id) {
		var { specials } = this.props
		for( var type in specials ) {
			if( specials[type][id] ) {
				return specials[type][id]
			}
		}
		return false
	}

	componentDidMount() {
		var id = this.props.params.id
		if( !this.getSpecial( id ) ){
			this.props.fetchSpecial( 'detail', id )
		}
	}

	componentDidUpdate(prevProps, prevState) {
		var oldId = prevProps.params.id
		var newId = this.props.params.id 
		if( newId !== oldId && !this.getSpecial( newId )){
			console.log(newId)
			this.props.fetchSpecial( 'detail', newId )
		}
	}

	render () {
		var { params } = this.props
		var spec = this.getSpecial( params.id ) ? this.getSpecial( params.id ) : {}

		var special = Object.assign({
			title: '',
			text: '',
			type: '',
			create_at: '',
			image: '',
			alt: '',
			links: []
		}, spec.data ? spec.data: {} )

		var isTopic = special.type == 'topic'

		function getLinks () {
			return special.links.map( link => (
				<div style={ itemStyle } key={ link.id }>	
					<a href={ link.target }>
						<h2 style={ itemH2Style }>{ link.title }</h2>
						<p style={ targetStyle }>{ link.target }</p>
					</a>
					<p style={ itemPStyle } >{ link.text }</p>
					<p style={ itemDateStyle }>创建日期 : {  link.create_at.split(' ')[0] }</p>
				</div>
			))
		}

		function getMain () {
			return spec.isFetching ? 
			<div>
				<Loading />
			</div>
			:
			<div style={ conStyle }>
				<div style={ titleConStyle }>
					<img style={ isTopic ? topicImgStyle : imgStyle } 
						src={ prefix + special.image + (isTopic ? topicPostfix : specialPostfix)  } />
					<div style={ isTopic ? topicTxtConStyle : txtConStyle }>
						<h1 style={ h1Style }>{ special.title }</h1>
						<p style={ isTopic ? topicTextStyle : textStyle }>{ special.text }</p>
						<p style= { cationStyle }>
							<span>
								类型 : { special.type.toUpperCase() }
							</span>
							<span style={dateStyle}>
								创建日期 : { special.create_at.split(' ')[0] }
							</span>
						</p>
					</div>
				</div>
				{ getLinks() }
			</div>
		}

		return (
			<div>
				<div style={ backConStyle }>
					<GoBack router={this.props.router}/>
				</div>
				<div style={ mainConStyle }>
					{ getMain() }
				</div>
			</div>
		)
	}
}



export default SpecialDetail