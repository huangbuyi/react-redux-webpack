import React from 'react'
import Loading from './Loading'
import { Link } from 'react-router'
import './specialBox.css'

import config from '../app.json'

const { prefix, specialPostfix } = config.image

class SpecialBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		var {cate, isFetching, onClick} = this.props;
		var special = Object.assign({
			id: 0,
			title: '',
			type: '',
			target: '',
			image: '',
			alt: '',
			text: '',
			links: [],
			create_at: ''
		}, this.props.special) 

		var maxLength = 90

		return (
			isFetching ?
			<div>
				<Loading />
			</div>
			:
			<div style={ boxStyle }>
				<div className="specialBox-title">
					<Link to={ '/specials/' + special.id }>
						<div>
							<img src={ prefix + special.image + specialPostfix} />
							<div className="blackFilter"></div>
							<h1 style={ headStyle }>{ special.title }</h1>
							<div style={ subheadStyle }>
								<p style={ subheadPStyle }>TYPE : { 
									special.type.toUpperCase() 
								}</p>
								<p style={ subheadPStyle }>DATE : { 
									special.create_at.split(' ')[0] 
								}</p>
							</div>
						</div>
					</Link>
				</div>
				{
					special.links.map( (link, i) => (			
						<div key={i} className="specialBox-item">
							<Link to={"/" + cate + "/" + link.id}>
								<div>
									<div 
										title={"点击打开" + link.target}
										onClick={(e) => {
											e.preventDefault();
											onClick(link.target)
										}}
									>
										<h2 style={ itemTitleStyle }>{link.title}</h2>
									</div>
									<div style={ itemBodyStyle }>
										<p style={ itemPStyle } title="点击查看">{ 
												link.text
										}</p>
									</div>
								</div>
							</Link>
						</div>
					))
				}
			</div>
		)
	}

}

const width = '720px'
const accentColor = '#2196F3'
const colorTransition = 'color 200ms cubic-bezier(0.4, 0.0, 0.2, 1)'
const itemWidth = '170px'

const loadingStyle = {
	width: width
}

const boxStyle = {
	cursor: "default",
	display: 'inline-block',
	position: 'relative',
	width: width
}

const headStyle = {
	fontSize: '24px',
	fontWeight: 'lighter',
	color: 'rgba(255,204,102,0.87)',
	padding: '0 12px',
	position: 'relative'
}
const subheadStyle = {
	position: 'absolute',
	bottom: '12px'
}
const subheadPStyle = {
	boxSizing: 'border-box',
	fontSize: '14px',
	color: 'rgba(255,255,255,0.5)',
	position: 'relative',
	padding: '0 12px',
	wordWrap:'break-word'
}

const itemTitleStyle = {
	fontSize: '14px',
	lineHeight: '20px',
	minHeight: '40px',
	fontWeight: 'bold',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	cursor: 'pointer'
}

const itemBodyStyle = {
	marginTop: '4px',
	height: '160px',
	overflow: 'hidden',
}

const itemPStyle = {
	boxSizing: 'border-box',
	fontSize: '12px',
	lineHeight: '20px',
	color: '#333',
	wordWrap:'break-word'
}

export default SpecialBox