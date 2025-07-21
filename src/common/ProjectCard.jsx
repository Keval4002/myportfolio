 import React from 'react'
 
 function ProjectCard(props) {
   return (            
        <a href={props.href} target='blank'><img className="hover" src={props.src} alt={props.projectName+"Logo"} style={{width: '120px', height: '120px', margin: '20px auto', display: 'block'}} />
        <h3>{props.projectName}</h3>
        <p>{props.projectDetails}</p>
        </a>
   )
 }
 
 export default ProjectCard