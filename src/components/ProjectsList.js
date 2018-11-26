import React from 'react'
import Project from "../components/Project"


const ProjectsList = (props) => {
	return props.projects.map((project, index) => (
		<Project
		name={project.name}
		image={project.image}
		url={project.url}
		sourceLink={project.sourceLink}
		/> 
	))
}

export default ProjectsList;