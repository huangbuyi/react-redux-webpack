import React from 'react'
import './TopicSpecial.css'
import Loading from './Loading'

const $shadow_1 = '0 1.5px 6px rgba(0,0,0,0.12), 0 1.5px 4px rgba(0,0,0,0.24)';
const $width = '710px';
const themeColor = '#f5f5f5';

const style = {
	boxShadow: $shadow_1,
	background: themeColor,
	width: $width,
	height: '360px'
}

const imageStyle = {
	width: '100%',
	height: '100%'
}

class TopicSpecial extends React.Component {

	render () {
		var topic = Object.assign({
			title: '',
			target: '',
			image: '',
			alt: '',
			text: ''
		}, this.props.topic) 
		
		return (
			this.props.isFetching ?
			<div>
				<Loading />
			</div>
			:
			<div style={ style }>
				<a target="_blank" href={topic.target}>
					<div className="projectImage">
						<img style={ imageStyle } src={ topic.image }/>
						<div className="projectAlt" alt={topic.alt}>
							{topic.alt}
						</div>
					</div>
				</a>
				<div className="projectIntro">
					<h1>{topic.title}</h1>
					<p>{topic.text}</p>
				</div>
			</div>
		)
	}
}


export default TopicSpecial