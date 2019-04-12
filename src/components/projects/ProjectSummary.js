// a module component for ProjectList.js

import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return(
    <div className="card summary">
      <div className="card-content">
        <div className="card-title">{project.title}</div>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="text-date">{moment(project.createdAt.toDate()).calendar()}</p>

        <div className="svg-container">
          <img className="svg1-edit" src={project.svg1} alt=""/>
          <img className="svg2-edit" src={project.svg2} alt=""/>
          <img className="svg3-edit" src={project.svg3} alt=""/>
        </div>

      </div>
    </div>
  )
}


export default ProjectSummary