import React from 'react'
import "../css/header.css"
import githubWhite from '../images/github-draw-logo-white.png'
import linkedinWhite from '../images/linkedin-draw-logo-white.png'

const Header = (props) => (
  <div className="headerComponent">
 	  <h1 className="headerTitle">{props.text}</h1>

		  <div className="socialMedia">
			  	<a   href="https://github.com/GalkaS">
						<img className="icon" src={githubWhite} alt="github"/> 
				  </a>
			  	<a  href="https://www.linkedin.com/in/galasi">
						<img className="icon" src={linkedinWhite} alt="linkedin"/> 
				  </a>
		  </div>
		</div>
)

export default Header