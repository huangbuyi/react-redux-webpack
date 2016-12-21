import React from 'react'
import ProjectSpecial from './ProjectSpecial'
import SpecialBox from './SpecialBox'
import { pastProjectList, projects, websites } from '../test_data/past'
import './Projects.css'




const Projects = () => (
	<div className="pastSpecial-container">
		{
			Object.keys(projects).reverse().map( (item) => (
				<div key={item} className="pastSpecial-item">
					<span className="pastSpecial-date">| {projects[item].date + "   第" + projects[item].period + "期"} |</span>
					<ProjectSpecial project={projects[item]} />
				</div>
			))
		}

	</div>
)

const Websites = () => (
	<div className="pastSpecial-container">
		{
			Object.keys(websites).reverse().map( (item) => (
				<div key={item} className="pastSpecial-item">
					<span className="pastSpecial-date">| {websites[item].date + "   第" + websites[item].period + "期"} |</span>
					<SpecialBox special={websites[item]} />
				</div>
			))
		}

	</div>
)			


export { Projects, Websites };