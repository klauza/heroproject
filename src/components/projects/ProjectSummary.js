// a module component for ProjectList.js

import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
  return(
    
      <div className="card-content">
        <div className="card-title">{project.title}</div>

        <div className="svg-container">
          <img className="svg1-edit" src={project.svg1} alt="svg1"/>
          <img className="svg2-edit" src={project.svg2} alt="svg2"/>
          <img className="svg3-edit" src={project.svg3} alt="svg3"/>
          
        </div>

        <div className="card-footer">
          <p className="card-para">posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="text-date">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
   
  )
}


export default ProjectSummary