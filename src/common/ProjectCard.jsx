 import React from 'react'
 
 function ProjectCard(props) {
   return (            
        <a href={props.href} target='blank'><img className="hover" src={props.src} alt={props.projectName+"Logo"} />
        <h3>{props.projectName}</h3>
        <p>{props.projectDetails}</p>
        </a>
   )
 }
 
 export default ProjectCard