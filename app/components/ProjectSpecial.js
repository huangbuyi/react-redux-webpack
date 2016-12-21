import React from 'react'
import './ProjectSpecial.css'

const ProjectSpecial = ({ project, onClick }) => (
	<div className="projectSpecial">
		<a target="_blank" href={project.target}>
			<div className="projectImage">
				<img src={project.image}/>
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

export default ProjectSpecial