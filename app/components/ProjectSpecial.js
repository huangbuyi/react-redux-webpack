import React from 'react'
import './ProjectSpecial.css'

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

class ProjectSpecial extends React.Component {

	render () {
		var project = Object.assign({
			title: '',
			target: '',
			image: '',
			alt: '',
			text: ''
		}, this.props.project) 
		
		return (
			<div style={ style }>
				<a target="_blank" href={project.target}>
					<div className="projectImage">
						<img style={ imageStyle } src={ project.image }/>
						<div className="projectAlt" alt={project.alt}>
							{project.alt}
						</div>
					</div>
				</a>
				<div className="projectIntro">
					<h1>{project.title}</h1>
					<p>{project.text}</p>
				</div>
			</div>
		)
	}
}


ProjectSpecial.defaultProps = {
	project: {}
}
export default ProjectSpecial