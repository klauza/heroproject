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
      </div>
    </div>
  )
}


export default ProjectSummary