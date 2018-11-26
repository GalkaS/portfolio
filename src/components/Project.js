import React from 'react'
import "../css/project.css"

const Project = (props) => (
  <div className="project">
  	<div className="projectTitle">{props.name}</div>
	  <div className="imageGrid">
		  <a href={props.url}>
			  <img 
			  	className="image"
				  src={props.image} 
				  alt="Thumbnail of the project"
			  />
		  </a>
	  </div>
	  <div>
  		<a className="sourceCode" href={props.sourceLink}>Source code</a>
  	</div>
  </div>
)

export default Project